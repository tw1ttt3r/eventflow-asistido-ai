import type { DigitalTicketDetail } from '@features/tickets/digital-ticket.model';
import { formatTicketCodeSuffix } from '@features/tickets/digital-ticket.model';

const PAGE_MARGIN = 48;
const CONTENT_WIDTH = 499;

const COLORS = {
  headerBg: [219, 234, 254] as const,
  purple: [88, 80, 236] as const,
  slate900: [15, 23, 42] as const,
  slate500: [100, 116, 139] as const,
  slate600: [71, 85, 105] as const,
  white: [255, 255, 255] as const,
};

export function buildWalletPassStub(ticket: DigitalTicketDetail): Record<string, unknown> {
  return {
    formatVersion: 1,
    passTypeIdentifier: 'pass.com.eventflow.ticket',
    serialNumber: ticket.ticketCode,
    teamIdentifier: 'EVENTFLOW-DEV',
    organizationName: 'EventFlow',
    description: ticket.eventTitle,
    logoText: 'EventFlow',
    disclaimer:
      'Development stub only. Apple Wallet requires a signed .pkpass from EventFlow servers.',
    eventTicket: {
      primaryFields: [{ key: 'event', label: 'Event', value: ticket.eventTitle }],
      secondaryFields: [
        { key: 'when', label: 'When', value: ticket.whenLabel },
        { key: 'where', label: 'Where', value: ticket.whereLabel },
      ],
      auxiliaryFields: [
        { key: 'attendee', label: 'Attendee', value: ticket.attendeeName },
        { key: 'type', label: 'Ticket', value: ticket.ticketTypeLabel },
      ],
      backFields: [
        { key: 'host', label: 'Host', value: ticket.host.name },
        { key: 'support', label: 'Support', value: ticket.host.email },
      ],
    },
    barcode: {
      format: 'PKBarcodeFormatQR',
      message: ticket.qrSeed,
      messageEncoding: 'iso-8859-1',
    },
  };
}

export function downloadBlobFile(filename: string, blob: Blob): void {
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = filename;
  anchor.rel = 'noopener';
  anchor.click();
  URL.revokeObjectURL(url);
}

export function downloadTextFile(filename: string, content: string, mimeType: string): void {
  downloadBlobFile(filename, new Blob([content], { type: mimeType }));
}

function writeLabelValue(
  doc: import('jspdf').jsPDF,
  label: string,
  value: string,
  x: number,
  y: number,
  valueColor: readonly [number, number, number] = COLORS.slate900,
): number {
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.setTextColor(...COLORS.slate500);
  doc.text(label.toUpperCase(), x, y);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.setTextColor(...valueColor);
  const lines = doc.splitTextToSize(value, CONTENT_WIDTH / 2);
  doc.text(lines, x, y + 16);

  return y + 16 + lines.length * 14;
}

export async function buildTicketPdfBlob(ticket: DigitalTicketDetail): Promise<Blob> {
  const [{ jsPDF }, QRCode] = await Promise.all([import('jspdf'), import('qrcode')]);
  const doc = new jsPDF({ unit: 'pt', format: 'a4' });
  const qrDataUrl = await QRCode.toDataURL(ticket.qrSeed, {
    margin: 1,
    width: 220,
    errorCorrectionLevel: 'M',
  });

  let y = PAGE_MARGIN;

  doc.setFillColor(...COLORS.headerBg);
  doc.roundedRect(PAGE_MARGIN, y, CONTENT_WIDTH, 72, 12, 12, 'F');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(...COLORS.purple);
  doc.text(ticket.categoryLabel.toUpperCase(), PAGE_MARGIN + 20, y + 28);

  doc.setFontSize(12);
  doc.setTextColor(...COLORS.slate900);
  doc.text(ticket.seriesLabel, PAGE_MARGIN + 20, y + 48, { maxWidth: CONTENT_WIDTH - 120 });

  doc.setFontSize(10);
  doc.setTextColor(...COLORS.purple);
  doc.text(ticket.admitCountLabel, PAGE_MARGIN + CONTENT_WIDTH - 20, y + 28, { align: 'right' });

  y += 96;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(20);
  doc.setTextColor(...COLORS.slate900);
  const titleLines = doc.splitTextToSize(ticket.eventTitle, CONTENT_WIDTH);
  doc.text(titleLines, PAGE_MARGIN, y);
  y += titleLines.length * 24 + 20;

  const attendeeBottom = writeLabelValue(
    doc,
    'Attendee',
    ticket.attendeeName,
    PAGE_MARGIN,
    y,
  );
  const ticketBottom = writeLabelValue(
    doc,
    'Ticket',
    ticket.ticketTypeLabel,
    PAGE_MARGIN + CONTENT_WIDTH / 2,
    y,
    COLORS.purple,
  );
  y = Math.max(attendeeBottom, ticketBottom) + 12;

  y = writeLabelValue(doc, 'When', ticket.whenLabel, PAGE_MARGIN, y) + 8;
  y = writeLabelValue(doc, 'Where', ticket.whereLabel, PAGE_MARGIN, y) + 16;

  doc.setDrawColor(226, 232, 240);
  doc.setLineDashPattern([4, 4], 0);
  doc.line(PAGE_MARGIN, y, PAGE_MARGIN + CONTENT_WIDTH, y);
  doc.setLineDashPattern([], 0);
  y += 24;

  const qrSize = 180;
  const qrX = PAGE_MARGIN + (CONTENT_WIDTH - qrSize) / 2;
  doc.addImage(qrDataUrl, 'PNG', qrX, y, qrSize, qrSize);
  y += qrSize + 20;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(13);
  doc.setTextColor(...COLORS.slate900);
  doc.text(`Ticket ID: ${formatTicketCodeSuffix(ticket.ticketCode)}`, PAGE_MARGIN + CONTENT_WIDTH / 2, y, {
    align: 'center',
  });
  y += 22;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.setTextColor(...COLORS.slate600);
  const note =
    'Present this QR at check-in. This ticket is non-transferable and valid for one entry.';
  const noteLines = doc.splitTextToSize(note, CONTENT_WIDTH - 80);
  doc.text(noteLines, PAGE_MARGIN + CONTENT_WIDTH / 2, y, { align: 'center' });
  y += noteLines.length * 14 + 24;

  doc.setFontSize(9);
  doc.setTextColor(...COLORS.slate500);
  doc.text('EventFlow · Secure Checkout', PAGE_MARGIN + CONTENT_WIDTH, y, { align: 'right' });
  doc.text(`Host: ${ticket.host.name} · ${ticket.host.email}`, PAGE_MARGIN, y);

  return doc.output('blob');
}

export async function downloadTicketPdf(ticket: DigitalTicketDetail): Promise<void> {
  const blob = await buildTicketPdfBlob(ticket);
  downloadBlobFile(`${ticket.ticketCode}.pdf`, blob);
}

export function downloadWalletPassStub(ticket: DigitalTicketDetail): void {
  downloadTextFile(
    `${ticket.ticketCode}.wallet-stub.json`,
    `${JSON.stringify(buildWalletPassStub(ticket), null, 2)}\n`,
    'application/json;charset=utf-8',
  );
}
