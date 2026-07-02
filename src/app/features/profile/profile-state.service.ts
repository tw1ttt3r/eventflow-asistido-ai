import { Injectable, signal } from '@angular/core';

import {
  applyEditFormToProfile,
  type ProfileEditFormValue,
  type ProfileDigitalTicket,
  type ProfileUpcomingEvent,
  type UserProfile,
  type UserProfileDashboard,
} from '@features/profile/profile.model';
import type { DigitalTicketDetail } from '@features/tickets/digital-ticket.model';
import { MOCK_USER_PROFILE_DASHBOARD } from '@mock/profile.mock';

@Injectable({ providedIn: 'root' })
export class ProfileStateService {
  private readonly dashboardState = signal<UserProfileDashboard>(structuredClone(MOCK_USER_PROFILE_DASHBOARD));

  readonly dashboard = this.dashboardState.asReadonly();

  updateProfile(value: ProfileEditFormValue): UserProfile {
    const current = this.dashboardState();
    const updatedProfile = applyEditFormToProfile(current.profile, value);

    this.dashboardState.set({
      ...current,
      profile: updatedProfile,
    });

    return updatedProfile;
  }

  addIssuedTicket(ticket: DigitalTicketDetail): void {
    const current = this.dashboardState();
    const [datePart, timePart] = ticket.whenLabel.split('•').map((part) => part.trim());
    const profileTicket: ProfileDigitalTicket = {
      id: ticket.id,
      label: ticket.ticketTypeLabel,
      quantityLabel: '1x',
      validUntilLabel: datePart ?? ticket.whenLabel,
    };

    const hasTicket = current.tickets.some((item) => item.id === ticket.id);
    const tickets = hasTicket ? current.tickets : [profileTicket, ...current.tickets];

    const upcomingId = ticket.eventId ? `up-reg-${ticket.eventId}` : `up-${ticket.id}`;
    const upcomingEvent: ProfileUpcomingEvent = {
      id: upcomingId,
      title: ticket.eventTitle,
      dateLabel: datePart ?? ticket.whenLabel,
      timeLabel: timePart ?? '',
      imageHue: ticket.imageHue,
      ticketId: ticket.id,
    };

    const hasUpcoming = current.upcoming.some((item) => item.id === upcomingId);
    const upcoming = hasUpcoming ? current.upcoming : [upcomingEvent, ...current.upcoming];

    this.dashboardState.set({
      ...current,
      tickets,
      upcoming,
    });
  }
}
