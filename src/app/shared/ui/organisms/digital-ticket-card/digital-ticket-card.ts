import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

import {
  formatTicketCodeSuffix,
  type DigitalTicketDetail,
} from '@features/tickets/digital-ticket.model';
import { EfIcon } from '@shared/ui/atoms/icon/icon';
import { QrCodeDisplay } from '@shared/ui/atoms/qr-code-display/qr-code-display';

@Component({
  selector: 'ef-digital-ticket-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [EfIcon, QrCodeDisplay],
  template: `
    <article class="overflow-hidden rounded-3xl bg-white shadow-lg shadow-slate-200/70 ring-1 ring-slate-100">
      <header class="flex items-center gap-3 bg-ef-blue/10 px-4 py-4">
        <div
          class="size-14 shrink-0 rounded-full ring-2 ring-white"
          [style.background]="thumbnailGradient()"
          aria-hidden="true"
        ></div>
        <div class="min-w-0 flex-1">
          <p class="text-xs font-semibold uppercase tracking-wide text-ef-purple">
            {{ ticket().categoryLabel }}
          </p>
          <p class="truncate text-sm font-bold text-slate-900">{{ ticket().seriesLabel }}</p>
        </div>
        <p class="shrink-0 text-xs font-bold text-ef-purple">{{ ticket().admitCountLabel }}</p>
      </header>

      <div class="space-y-5 p-5">
        <h1 class="font-serif text-xl font-bold leading-snug text-slate-900">{{ ticket().eventTitle }}</h1>

        <div class="grid grid-cols-2 gap-4">
          <div>
            <p class="text-xs text-slate-500">Attendee</p>
            <p class="mt-1 text-sm font-bold text-slate-900">{{ ticket().attendeeName }}</p>
          </div>
          <div class="text-right">
            <p class="text-xs text-slate-500">Ticket</p>
            <p class="mt-1 text-sm font-bold text-ef-purple">{{ ticket().ticketTypeLabel }}</p>
          </div>
        </div>

        <div class="space-y-4">
          <div class="flex items-start gap-3">
            <div class="mt-0.5 text-ef-purple">
              <ef-icon name="calendar" size="sm" />
            </div>
            <div>
              <p class="text-xs text-slate-500">When</p>
              <p class="mt-1 text-sm font-bold text-slate-900">{{ ticket().whenLabel }}</p>
            </div>
          </div>
          <div class="flex items-start gap-3">
            <div class="mt-0.5 text-ef-purple">
              <ef-icon name="map-pin" size="sm" />
            </div>
            <div>
              <p class="text-xs text-slate-500">Where</p>
              <p class="mt-1 text-sm font-bold text-slate-900">{{ ticket().whereLabel }}</p>
            </div>
          </div>
        </div>

        <div class="flex items-center gap-2 py-1" aria-hidden="true">
          <span class="h-px flex-1 border-t border-dashed border-slate-200"></span>
          <span class="text-xs tracking-[0.3em] text-slate-300">•••</span>
          <span class="h-px flex-1 border-t border-dashed border-slate-200"></span>
        </div>

        <div class="flex flex-col items-center gap-3 text-center">
          <div class="rounded-2xl bg-white p-3 ring-1 ring-slate-100">
            <ef-qr-code-display [seed]="ticket().qrSeed" />
          </div>
          <p class="text-sm font-bold text-slate-900">
            Ticket ID: {{ ticketCodeSuffix() }}
          </p>
          <p class="max-w-xs text-xs leading-relaxed text-slate-500">
            Present this QR at check-in. This ticket is non-transferable and valid for one entry.
          </p>
        </div>
      </div>
    </article>
  `,
})
export class DigitalTicketCard {
  readonly ticket = input.required<DigitalTicketDetail>();

  protected readonly ticketCodeSuffix = computed(() =>
    formatTicketCodeSuffix(this.ticket().ticketCode),
  );

  protected thumbnailGradient(): string {
    const hue = this.ticket().imageHue;
    return `linear-gradient(135deg, hsl(${hue} 55% 72%), hsl(${(hue + 35) % 360} 45% 52%))`;
  }
}
