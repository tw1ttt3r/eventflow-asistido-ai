import { describe, expect, it } from 'vitest';

import {
  buildTicketPdfBlob,
  buildWalletPassStub,
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

  it('should build wallet pass stub payload', () => {
    const stub = buildWalletPassStub(ticket);
    expect(stub['serialNumber']).toBe('EF-4A7C-9B2F');
    expect(stub['disclaimer']).toContain('Development stub');
    expect((stub['eventTicket'] as { primaryFields: unknown[] }).primaryFields).toHaveLength(1);
  });

  it('should resolve ticket ids from upcoming registration ids', () => {
    expect(resolveTicketId('up-reg-5')).toBe('tkt-reg-5');
    expect(resolveTicketId('up-1')).toBe('tkt-1');
    expect(resolveTicketId('tkt-2')).toBe('tkt-2');
  });
});

