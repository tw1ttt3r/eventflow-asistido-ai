import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';

import type { RegistrationFormValue } from '@features/events/event-registration.model';
import { ProfileStateService } from '@features/profile/profile-state.service';
import { DigitalTicketStateService } from '@features/tickets/digital-ticket-state.service';
import { findEventRegistration } from '@mock/event-registration.mock';
import { EfButton } from '@shared/ui/atoms/button/button';
import { EventUnavailableCard } from '@shared/ui/organisms/event-unavailable-card/event-unavailable-card';
import { EventRegistrationForm } from '@shared/ui/organisms/event-registration-form/event-registration-form';
import { EventSummaryCard } from '@shared/ui/organisms/event-summary-card/event-summary-card';
import { InfoNoticeRow } from '@shared/ui/molecules/info-notice-row/info-notice-row';
import { RegistrationLayout } from '@shared/ui/templates/registration-layout/registration-layout';

@Component({
  selector: 'app-event-registration-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RegistrationLayout,
    EventSummaryCard,
    EventUnavailableCard,
    EventRegistrationForm,
    InfoNoticeRow,
    EfButton,
  ],
  template: `
    @if (event(); as currentEvent) {
      <ef-registration-layout
        [spotsLeft]="currentEvent.spotsLeft"
        (backPress)="backToEvents()"
      >
        <ef-event-summary-card [event]="currentEvent" />

        <ef-event-registration-form
          [priceLabel]="currentEvent.priceLabel"
          [submitting]="submitting()"
          (submitted)="onSubmit($event)"
          (saveForLater)="onSaveForLater()"
        />

        <ef-info-notice-row variant="info" [text]="currentEvent.whatToBring" />
        <ef-info-notice-row variant="host" [text]="currentEvent.host" />
        <ef-info-notice-row
          variant="duration"
          [text]="currentEvent.duration + ' — ' + currentEvent.doorsOpen"
        />

        @if (successMessage(); as message) {
          <div class="space-y-3">
            <p
              class="rounded-2xl bg-emerald-50 px-4 py-3 text-center text-sm font-medium text-emerald-700"
              role="status"
            >
              {{ message }}
            </p>
            @if (issuedTicketId(); as ticketId) {
              <ef-button variant="purple" (pressed)="viewTicket(ticketId)">View your ticket</ef-button>
            }
          </div>
        }
      </ef-registration-layout>
    } @else {
      <ef-registration-layout [showSpotsBadge]="false" (backPress)="backToEvents()">
        <ef-event-unavailable-card (backPress)="backToEvents()" />
      </ef-registration-layout>
    }
  `,
})
export class EventRegistrationPage {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly ticketState = inject(DigitalTicketStateService);
  private readonly profileState = inject(ProfileStateService);

  private readonly eventId = toSignal(
    this.route.paramMap.pipe(map((params) => params.get('id') ?? '')),
    { initialValue: '' },
  );

  protected readonly event = computed(() => {
    const id = this.eventId();
    return id ? findEventRegistration(id) : undefined;
  });
  protected readonly submitting = signal(false);
  protected readonly successMessage = signal<string | null>(null);
  protected readonly issuedTicketId = signal<string | null>(null);

  protected async onSubmit(value: RegistrationFormValue): Promise<void> {
    const currentEvent = this.event();
    if (!currentEvent) {
      return;
    }

    this.submitting.set(true);
    this.successMessage.set(null);
    this.issuedTicketId.set(null);

    try {
      await new Promise((resolve) => setTimeout(resolve, 400));
      const ticket = this.ticketState.issueFromRegistration(currentEvent, value);
      this.profileState.addIssuedTicket(ticket);
      this.issuedTicketId.set(ticket.id);
      const firstName = value.fullName.trim().split(/\s+/)[0];
      this.successMessage.set(`You're registered, ${firstName}! Your digital ticket is ready.`);
    } finally {
      this.submitting.set(false);
    }
  }

  protected viewTicket(ticketId: string): void {
    void this.router.navigate(['/session', 'tickets', ticketId]);
  }

  protected onSaveForLater(): void {
    void this.router.navigate(['/events']);
  }

  protected backToEvents(): void {
    void this.router.navigate(['/events']);
  }
}
