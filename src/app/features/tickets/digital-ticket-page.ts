import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';

import { ProfileStateService } from '@features/profile/profile-state.service';
import {
  downloadTicketPdf,
} from '@features/tickets/digital-ticket-download.util';
import { buildHostMailto, resolveEventRouteId } from '@features/tickets/digital-ticket.model';
import { DigitalTicketStateService } from '@features/tickets/digital-ticket-state.service';
import { EfButton } from '@shared/ui/atoms/button/button';
import { DigitalTicketCard } from '@shared/ui/organisms/digital-ticket-card/digital-ticket-card';
import { DigitalTicketHelpCard } from '@shared/ui/organisms/digital-ticket-help-card/digital-ticket-help-card';
import { EventUnavailableCard } from '@shared/ui/organisms/event-unavailable-card/event-unavailable-card';
import { TicketLayout } from '@shared/ui/templates/ticket-layout/ticket-layout';

@Component({
  selector: 'app-digital-ticket-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    TicketLayout,
    DigitalTicketCard,
    DigitalTicketHelpCard,
    EfButton,
    EventUnavailableCard,
  ],
  template: `
    @if (ticket(); as currentTicket) {
      <ef-ticket-layout
        [profileName]="profile().fullName"
        [profileAvatarUrl]="profile().avatarUrl"
        [profileHue]="profile().avatarHue"
        (profilePress)="goToSession()"
      >
        <ef-digital-ticket-card [ticket]="currentTicket" />

        <ef-digital-ticket-help-card
          [host]="currentTicket.host"
          [mailtoHref]="hostMailto()"
          [expanded]="showContactPanel()"
          (contactPress)="toggleContactPanel()"
        />

        @if (eventRouteId(); as routeId) {
          <ef-button variant="outline" (pressed)="viewEvent(routeId)">View event page</ef-button>
        }

        @if (downloadMessage(); as message) {
          <p class="rounded-2xl bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700" role="status">
            {{ message }}
          </p>
        }

        <ef-button variant="purple" [disabled]="downloading()" (pressed)="downloadTicket()">
          {{ downloading() ? 'Preparing download…' : 'Download Ticket' }}
        </ef-button>
      </ef-ticket-layout>
    } @else {
      <ef-ticket-layout
        [profileName]="profile().fullName"
        [profileAvatarUrl]="profile().avatarUrl"
        [profileHue]="profile().avatarHue"
        (profilePress)="goToSession()"
      >
        <ef-event-unavailable-card (backPress)="goToSession()" />
      </ef-ticket-layout>
    }
  `,
})
export class DigitalTicketPage {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly profileState = inject(ProfileStateService);
  private readonly ticketState = inject(DigitalTicketStateService);

  private readonly ticketId = toSignal(
    this.route.paramMap.pipe(map((params) => params.get('ticketId') ?? '')),
    { initialValue: '' },
  );

  protected readonly profile = computed(() => this.profileState.dashboard().profile);
  protected readonly downloading = signal(false);
  protected readonly downloadMessage = signal<string | null>(null);
  protected readonly showContactPanel = signal(false);

  protected readonly ticket = computed(() => {
    const id = this.ticketId();
    return id ? this.ticketState.getTicket(id) : undefined;
  });

  protected readonly hostMailto = computed(() => {
    const currentTicket = this.ticket();
    return currentTicket ? buildHostMailto(currentTicket) : '';
  });

  protected readonly eventRouteId = computed(() => {
    const currentTicket = this.ticket();
    return currentTicket ? resolveEventRouteId(currentTicket) : null;
  });

  protected goToSession(): void {
    void this.router.navigate(['/session']);
  }

  protected viewEvent(eventId: string): void {
    void this.router.navigate(['/events', eventId]);
  }

  protected toggleContactPanel(): void {
    this.showContactPanel.update((value) => !value);
  }

  protected async downloadTicket(): Promise<void> {
    const currentTicket = this.ticket();
    if (!currentTicket) {
      return;
    }

    this.downloading.set(true);
    this.downloadMessage.set(null);

    try {
      await downloadTicketPdf(currentTicket);
      this.downloadMessage.set('Ticket PDF downloaded.');
    } finally {
      this.downloading.set(false);
    }
  }
}
