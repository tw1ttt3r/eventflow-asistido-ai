import { TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from 'vitest';

import { ProfileStateService } from '@features/profile/profile-state.service';
import { profileToEditForm } from '@features/profile/profile.model';
import type { DigitalTicketDetail } from '@features/tickets/digital-ticket.model';
import { MOCK_DIGITAL_TICKETS } from '@mock/digital-ticket.mock';
import { MOCK_USER_PROFILE_DASHBOARD } from '@mock/profile.mock';

const TEST_TICKET: DigitalTicketDetail = {
  ...MOCK_DIGITAL_TICKETS['tkt-2']!,
  id: 'tkt-test-issued',
  eventId: 'evt-test-issued',
  ticketCode: 'EF-TEST-ISSUED',
  qrSeed: 'EF-TEST-ISSUED',
};

describe('ProfileStateService', () => {
  beforeEach(() => {
    TestBed.resetTestingModule();
    TestBed.configureTestingModule({});
  });

  it('should update profile from edit form', () => {
    const service = TestBed.inject(ProfileStateService);
    const form = profileToEditForm(MOCK_USER_PROFILE_DASHBOARD.profile);

    const updated = service.updateProfile({ ...form, fullName: 'Updated Name' });

    expect(updated.fullName).toBe('Updated Name');
    expect(service.dashboard().profile.fullName).toBe('Updated Name');
  });

  it('should add issued ticket to tickets, upcoming and my events', () => {
    const service = TestBed.inject(ProfileStateService);
    const before = service.dashboard();

    service.addIssuedTicket(TEST_TICKET);

    const after = service.dashboard();
    expect(after.tickets.length).toBe(before.tickets.length + 1);
    expect(after.upcoming.length).toBe(before.upcoming.length + 1);
    expect(after.myEvents.length).toBe(before.myEvents.length + 1);
    expect(after.myEvents.some((event) => event.ticketId === TEST_TICKET.id)).toBe(true);
  });

  it('should not duplicate ticket entries when called twice', () => {
    const service = TestBed.inject(ProfileStateService);

    service.addIssuedTicket(TEST_TICKET);
    const afterFirst = service.dashboard();
    service.addIssuedTicket(TEST_TICKET);
    const afterSecond = service.dashboard();

    expect(afterSecond.tickets.length).toBe(afterFirst.tickets.length);
    expect(afterSecond.upcoming.length).toBe(afterFirst.upcoming.length);
    expect(afterSecond.myEvents.length).toBe(afterFirst.myEvents.length);
  });
});
