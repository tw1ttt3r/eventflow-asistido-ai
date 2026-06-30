import { ChangeDetectionStrategy, Component, output } from '@angular/core';

import { EfButton } from '@shared/ui/atoms/button/button';
import { EfIcon } from '@shared/ui/atoms/icon/icon';
import { Subheading } from '@shared/ui/atoms/subheading/subheading';
import { InfoNoticeRow } from '@shared/ui/molecules/info-notice-row/info-notice-row';

@Component({
  selector: 'ef-event-unavailable-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Subheading, EfButton, EfIcon, InfoNoticeRow],
  template: `
    <section
      class="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-100"
      aria-labelledby="event-unavailable-title"
    >
      <div
        class="relative bg-gradient-to-br from-ef-lavender via-white to-ef-blue/10 px-6 pb-8 pt-10 text-center"
      >
        <div
          class="pointer-events-none absolute -right-6 -top-6 size-28 rounded-full bg-ef-purple/10 blur-2xl"
          aria-hidden="true"
        ></div>
        <div
          class="pointer-events-none absolute -bottom-8 -left-4 size-24 rounded-full bg-ef-blue/10 blur-2xl"
          aria-hidden="true"
        ></div>

        <div
          class="relative mx-auto flex size-20 items-center justify-center rounded-3xl bg-white shadow-md ring-1 ring-slate-100"
          aria-hidden="true"
        >
          <ef-icon name="calendar-x" size="xl" iconClass="text-ef-purple" />
        </div>

        <h1
          id="event-unavailable-title"
          class="relative mt-6 font-serif text-2xl font-bold leading-tight text-slate-900 sm:text-3xl"
        >
          Evento no disponible
        </h1>
        <ef-subheading class="relative mx-auto mt-3 max-w-sm">
          Este enlace de registro ya no está activo, el evento fue cancelado o no existe en EventFlow.
        </ef-subheading>
      </div>

      <div class="space-y-3 px-5 pb-5">
        <ef-info-notice-row
          variant="info"
          text="Revisa tu correo por si recibiste una actualización del organizador."
        />
        <ef-info-notice-row
          variant="duration"
          text="Puedes explorar otros eventos publicados desde tu panel."
        />

        <div class="pt-2">
          <ef-button variant="purple" (pressed)="backPress.emit()">Ver todos los eventos</ef-button>
        </div>
      </div>
    </section>
  `,
})
export class EventUnavailableCard {
  readonly backPress = output<void>();
}
