import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';

import type { EventDetail } from '@features/events/event-detail.model';
import { findEventDetail } from '@mock/event-detail.mock';
import { EventAboutCard } from '@shared/ui/organisms/event-about-card/event-about-card';
import { EventAvailabilityCard } from '@shared/ui/organisms/event-availability-card/event-availability-card';
import { EventDetailActionBar } from '@shared/ui/organisms/event-detail-action-bar/event-detail-action-bar';
import { EventDetailHero } from '@shared/ui/organisms/event-detail-hero/event-detail-hero';
import { EventHostBanner } from '@shared/ui/organisms/event-host-banner/event-host-banner';
import { EventHostProfileCard } from '@shared/ui/organisms/event-host-profile-card/event-host-profile-card';
import { EventUnavailableCard } from '@shared/ui/organisms/event-unavailable-card/event-unavailable-card';
import { SimilarEventsCarousel } from '@shared/ui/organisms/similar-events-carousel/similar-events-carousel';
import { EventDetailLayout } from '@shared/ui/templates/event-detail-layout/event-detail-layout';

@Component({
  selector: 'app-event-detail-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    EventDetailLayout,
    EventDetailHero,
    EventAvailabilityCard,
    EventHostBanner,
    EventAboutCard,
    SimilarEventsCarousel,
    EventHostProfileCard,
    EventDetailActionBar,
    EventUnavailableCard,
  ],
  template: `
    @if (event(); as currentEvent) {
      <ef-event-detail-layout
        (backPress)="backToEvents()"
        (sharePress)="onShare()"
        (morePress)="onMore()"
      >
        <ef-event-detail-hero [event]="currentEvent" />
        <ef-event-availability-card [event]="currentEvent" />
        <ef-event-host-banner [event]="currentEvent" />
        <ef-event-about-card [event]="currentEvent" />
        <ef-similar-events-carousel
          [events]="currentEvent.similarEvents"
          (eventPress)="openEvent($event)"
          (seeAllPress)="backToEvents()"
        />
        <ef-event-host-profile-card [host]="currentEvent.host" (viewProfilePress)="onViewProfile()" />
      </ef-event-detail-layout>

      <ef-event-detail-action-bar
        (savePress)="onSave()"
        (registerPress)="onRegister(currentEvent.id)"
      />

      @if (saved()) {
        <p
          class="fixed bottom-24 inset-x-4 z-30 mx-auto max-w-lg rounded-2xl bg-emerald-50 px-4 py-3 text-center text-sm font-medium text-emerald-700 shadow-sm"
          role="status"
        >
          Event saved to your list.
        </p>
      }
    } @else {
      <ef-event-detail-layout (backPress)="backToEvents()">
        <ef-event-unavailable-card (backPress)="backToEvents()" />
      </ef-event-detail-layout>
    }
  `,
})
export class EventDetailPage {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  private readonly eventId = toSignal(
    this.route.paramMap.pipe(map((params) => params.get('id') ?? '')),
    { initialValue: '' },
  );

  protected readonly event = computed((): EventDetail | undefined => {
    const id = this.eventId();
    return id ? findEventDetail(id) : undefined;
  });

  protected readonly saved = signal(false);

  protected backToEvents(): void {
    void this.router.navigate(['/events']);
  }

  protected onRegister(eventId: string): void {
    void this.router.navigate(['/events', eventId, 'register']);
  }

  protected openEvent(eventId: string): void {
    void this.router.navigate(['/events', eventId]);
  }

  protected onSave(): void {
    this.saved.set(true);
  }

  protected onShare(): void {
    // Placeholder: compartir evento
  }

  protected onMore(): void {
    // Placeholder: menú de opciones
  }

  protected onViewProfile(): void {
    void this.router.navigate(['/session']);
  }
}
