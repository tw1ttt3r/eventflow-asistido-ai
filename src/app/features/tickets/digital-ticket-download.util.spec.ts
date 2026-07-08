import { describe, expect, it, vi } from 'vitest';

import {
  buildTicketPdfBlob,
  downloadBlobFile,
  downloadTicketPdf,
  resolveQrcodeModule,
} from '@features/tickets/digital-ticket-download.util';
import { MOCK_DIGITAL_TICKETS, resolveTicketId } from '@mock/digital-ticket.mock';


describe('digital-ticket-download.util', () => {
  const ticket = MOCK_DIGITAL_TICKETS['tkt-1']!;

  it('should build a pdf blob for the ticket', async () => {
    const blob = await buildTicketPdfBlob(ticket);

    expect(blob.type).toBe('application/pdf');
    expect(blob.size).toBeGreaterThan(2_000);

    const header = new Uint8Array(await blob.arrayBuffer()).slice(0, 4);
    expect(String.fromCharCode(...header)).toBe('%PDF');
  });

  it('should resolve qrcode default export interop', () => {
    const toDataURL = async () => 'data:image/png;base64,test';
    const resolved = resolveQrcodeModule({
      default: { toDataURL },
    });

    expect(resolved.toDataURL).toBeTypeOf('function');
  });

  it('should reject qrcode modules without toDataURL', () => {
    expect(() => resolveQrcodeModule({})).toThrow(TypeError);
    expect(() => resolveQrcodeModule({})).toThrow('qrcode module did not expose toDataURL');
  });

  it('should download blob files', () => {
    const clickSpy = vi.spyOn(HTMLAnchorElement.prototype, 'click').mockImplementation(() => {});
    const blob = new Blob(['pdf'], { type: 'application/pdf' });

    downloadBlobFile('ticket.pdf', blob);

    expect(clickSpy).toHaveBeenCalledTimes(1);
    clickSpy.mockRestore();
  });

  it('should download ticket pdf via helper', async () => {
    const clickSpy = vi.spyOn(HTMLAnchorElement.prototype, 'click').mockImplementation(() => {});

    await downloadTicketPdf(ticket);

    expect(clickSpy).toHaveBeenCalled();
    clickSpy.mockRestore();
  });

  it('should resolve ticket ids from upcoming registration ids', () => {
    expect(resolveTicketId('up-reg-5')).toBe('tkt-reg-5');
    expect(resolveTicketId('up-1')).toBe('tkt-1');
    expect(resolveTicketId('tkt-2')).toBe('tkt-2');
  });
});

