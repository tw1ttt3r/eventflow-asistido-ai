import { ChangeDetectionStrategy, Component, computed, effect, input, model, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {
  EVENT_EDIT_DESCRIPTION_MAX,
  eventEditToFormValue,
  validateEventEditForm,
  type EventEditData,
  type EventEditFormValue,
  type EventEditStatus,
} from '@features/events/event-edit.model';
import { EfButton } from '@shared/ui/atoms/button/button';
import { EfIcon } from '@shared/ui/atoms/icon/icon';
import { EfIconButton } from '@shared/ui/atoms/icon-button/icon-button';
import { Label } from '@shared/ui/atoms/label/label';
import { FormField } from '@shared/ui/molecules/form-field/form-field';
import { SegmentedControl, type SegmentedOption } from '@shared/ui/molecules/segmented-control/segmented-control';
import { SparklineChart } from '@shared/ui/molecules/sparkline-chart/sparkline-chart';

const STATUS_OPTIONS: SegmentedOption<EventEditStatus>[] = [
  { value: 'published', label: 'Published' },
  { value: 'draft', label: 'Draft' },
  { value: 'closed', label: 'Closed' },
];

@Component({
  selector: 'ef-event-edit-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    FormsModule,
    Label,
    FormField,
    EfButton,
    EfIcon,
    EfIconButton,
    SegmentedControl,
    SparklineChart,
  ],
  template: `
    <form class="space-y-4" (ngSubmit)="submitForm()">
      <!-- Banner -->
      <section class="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-100">
        <div
          class="relative flex h-44 items-end justify-between p-4"
          [style.background]="bannerGradient()"
        >
          @if (bannerPreview(); as bannerUrl) {
            <img [src]="bannerUrl" alt="" class="absolute inset-0 size-full object-cover" />
            <div class="absolute inset-0 bg-slate-900/20"></div>
          }
          <div class="relative z-10">
            <p class="text-sm font-semibold text-white drop-shadow">Event banner</p>
            <p class="mt-0.5 text-xs text-white/90 drop-shadow">Recommended size: 1280×720 · JPG or PNG</p>
          </div>
          <div class="relative z-10 flex items-center gap-2">
            <label
              class="inline-flex cursor-pointer items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-xs font-semibold text-slate-800 shadow-sm backdrop-blur"
            >
              <ef-icon name="image" size="sm" />
              Replace
              <input type="file" accept="image/*" class="sr-only" (change)="onBannerSelected($event)" />
            </label>
            <ef-icon-button ariaLabel="Capture banner">
              <ef-icon name="camera" size="sm" />
            </ef-icon-button>
          </div>
        </div>
      </section>

      <!-- Details -->
      <section class="space-y-4 rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
        <h2 class="text-base font-bold text-slate-900">Event details</h2>
        <ef-form-field fieldId="event-edit-title" label="Title" [(value)]="title" />
        <div class="space-y-2">
          <ef-label htmlFor="event-edit-description">Description</ef-label>
          <textarea
            id="event-edit-description"
            rows="4"
            class="w-full resize-none rounded-3xl border border-slate-200 bg-white px-5 py-3.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-ef-purple focus:outline-none focus:ring-2 focus:ring-ef-purple/20"
            [(ngModel)]="description"
            name="description"
            [attr.maxlength]="descriptionMax"
          ></textarea>
          <div class="flex items-center justify-between text-xs text-slate-500">
            <span>Supports Markdown · {{ description().length }}/{{ descriptionMax }}</span>
            <button type="button" class="font-semibold text-ef-blue" (click)="previewPress.emit()">Preview</button>
          </div>
        </div>
      </section>

      <!-- Schedule -->
      <section class="space-y-4 rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
        <h2 class="text-base font-bold text-slate-900">Schedule</h2>
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div class="space-y-2">
            <ef-label htmlFor="event-edit-date">Date</ef-label>
            <div class="flex items-center gap-2">
              <input
                id="event-edit-date"
                class="min-w-0 flex-1 rounded-full border border-slate-200 bg-white px-5 py-3.5 text-sm text-slate-900 focus:border-ef-purple focus:outline-none focus:ring-2 focus:ring-ef-purple/20"
                [(ngModel)]="dateLabel"
                name="dateLabel"
              />
              <ef-icon-button ariaLabel="Pick date">
                <ef-icon name="calendar" size="sm" />
              </ef-icon-button>
            </div>
          </div>
          <div class="space-y-2">
            <ef-label htmlFor="event-edit-time">Time</ef-label>
            <div class="flex items-center gap-2">
              <input
                id="event-edit-time"
                class="min-w-0 flex-1 rounded-full border border-slate-200 bg-white px-5 py-3.5 text-sm text-slate-900 focus:border-ef-purple focus:outline-none focus:ring-2 focus:ring-ef-purple/20"
                [(ngModel)]="timeRangeLabel"
                name="timeRangeLabel"
              />
              <ef-icon-button ariaLabel="Pick time">
                <ef-icon name="clock" size="sm" />
              </ef-icon-button>
            </div>
          </div>
        </div>
        <div class="space-y-2">
          <ef-label htmlFor="event-edit-status">Status</ef-label>
          <ef-segmented-control
            ariaLabel="Event status"
            [options]="statusOptions"
            [(value)]="status"
          />
        </div>
      </section>

      <!-- Location & capacity -->
      <section class="space-y-4 rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
        <h2 class="text-base font-bold text-slate-900">Location &amp; capacity</h2>
        <div class="space-y-2">
          <ef-label htmlFor="event-edit-location">Location</ef-label>
          <div class="flex items-center gap-2">
            <input
              id="event-edit-location"
              class="min-w-0 flex-1 rounded-full border border-slate-200 bg-white px-5 py-3.5 text-sm text-slate-900 focus:border-ef-purple focus:outline-none focus:ring-2 focus:ring-ef-purple/20"
              [(ngModel)]="location"
              name="location"
            />
            <ef-icon-button ariaLabel="Open map">
              <ef-icon name="map-pin" size="sm" />
            </ef-icon-button>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div class="space-y-2">
            <ef-label htmlFor="event-edit-capacity">Capacity</ef-label>
            <input
              id="event-edit-capacity"
              type="number"
              min="1"
              class="w-full rounded-full border border-slate-200 bg-white px-5 py-3.5 text-sm text-slate-900 focus:border-ef-purple focus:outline-none focus:ring-2 focus:ring-ef-purple/20"
              [(ngModel)]="capacity"
              name="capacity"
            />
          </div>
          <div class="space-y-2">
            <ef-label htmlFor="event-edit-spots-left">Spots left</ef-label>
            <div
              class="flex h-[50px] items-center rounded-full bg-ef-blue/10 px-5 text-sm font-bold text-ef-blue"
            >
              {{ spotsLeft() }}
            </div>
          </div>
        </div>
        <div class="space-y-2">
          <ef-label htmlFor="event-edit-map-preview">Map preview</ef-label>
          <div
            class="h-28 overflow-hidden rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 ring-1 ring-slate-200"
          >
            <div class="flex h-full items-center justify-center gap-2 text-xs font-medium text-slate-500">
              <ef-icon name="map-pin" size="sm" />
              Static map preview
            </div>
          </div>
        </div>
      </section>

      <!-- Registration summary -->
      <section class="space-y-4 rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
        <div class="flex items-center justify-between gap-3">
          <h2 class="text-base font-bold text-slate-900">Registration summary</h2>
          <span class="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
            Live stats
          </span>
        </div>
        <div class="grid grid-cols-3 gap-3">
          <div class="rounded-2xl bg-ef-blue/10 p-3 text-center">
            <p class="text-xs font-medium text-slate-500">Registered</p>
            <p class="mt-1 text-xl font-bold text-slate-900">{{ editData().registrationStats.registered }}</p>
          </div>
          <div class="rounded-2xl bg-emerald-50 p-3 text-center">
            <p class="text-xs font-medium text-slate-500">Available</p>
            <p class="mt-1 text-xl font-bold text-slate-900">{{ editData().registrationStats.available }}</p>
          </div>
          <div class="rounded-2xl bg-slate-50 p-3 text-center ring-1 ring-slate-100">
            <p class="text-xs font-medium text-slate-500">Capacity</p>
            <p class="mt-1 text-xl font-bold text-slate-900">{{ editData().registrationStats.capacity }}</p>
          </div>
        </div>
        <div class="space-y-2">
          <p class="text-sm font-semibold text-slate-700">Registrations over time</p>
          <ef-sparkline-chart
            [totalsLine]="editData().registrationStats.sparkline.totalsLine"
            [publishedLine]="editData().registrationStats.sparkline.publishedLine"
          />
        </div>
      </section>

      <!-- Audit -->
      <section class="rounded-3xl bg-white px-5 py-4 shadow-sm ring-1 ring-slate-100">
        <div class="flex items-center justify-between gap-3">
          <div class="flex items-center gap-3">
            <div class="flex size-9 items-center justify-center rounded-full bg-ef-lavender text-ef-purple">
              <ef-icon name="user" size="sm" />
            </div>
            <div>
              <p class="text-xs font-medium text-slate-500">Last updated</p>
              <p class="text-sm font-semibold text-slate-900">
                By {{ editData().audit.updatedBy }} · {{ editData().audit.updatedAtLabel }}
              </p>
            </div>
          </div>
          <span class="text-xs font-semibold text-slate-400">Version {{ editData().audit.version }}</span>
        </div>
      </section>

      @if (formError(); as error) {
        <p class="rounded-2xl bg-rose-50 px-4 py-3 text-sm font-medium text-rose-700" role="alert">
          {{ error }}
        </p>
      }

      @if (saved()) {
        <p class="rounded-2xl bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700" role="status">
          Changes saved locally.
        </p>
      }

      <!-- Actions -->
      <div class="space-y-3">
        <ef-button type="submit" variant="blue" [disabled]="submitting()">Save changes</ef-button>
        <ef-button type="button" variant="outline" (pressed)="cancelled.emit()">Cancel</ef-button>
        <ef-button type="button" variant="destructive" (pressed)="deletePress.emit()">
          <span class="inline-flex items-center justify-center gap-2">
            <ef-icon name="trash" size="sm" />
            Delete event
          </span>
        </ef-button>
      </div>

      <p class="text-center text-xs leading-relaxed text-slate-400">
        Changes are saved locally. For full audit logs visit Admin — Activity · Need help?
        <a href="mailto:support@eventflow.com" class="text-ef-blue">contact support&#64;eventflow.com</a>
      </p>
    </form>
  `,
})
export class EventEditForm {
  readonly editData = input.required<EventEditData>();
  readonly submitting = input(false);

  protected readonly descriptionMax = EVENT_EDIT_DESCRIPTION_MAX;
  protected readonly statusOptions = STATUS_OPTIONS;

  protected title = model('');
  protected description = model('');
  protected bannerPreview = model<string | null>(null);
  protected dateLabel = model('');
  protected timeRangeLabel = model('');
  protected status = model<EventEditStatus>('published');
  protected location = model('');
  protected capacity = model(0);

  protected readonly formError = signal<string | null>(null);
  protected readonly saved = signal(false);

  readonly submitted = output<EventEditFormValue>();
  readonly cancelled = output<void>();
  readonly deletePress = output<void>();
  readonly previewPress = output<void>();

  protected readonly spotsLeft = computed(() => {
    const registered = this.editData().registrationStats.registered;
    return Math.max(0, this.capacity() - registered);
  });

  protected readonly bannerGradient = computed(() => {
    const hue = this.editData().bannerHue;
    return `linear-gradient(135deg, hsl(${hue} 70% 88%), hsl(${(hue + 40) % 360} 65% 78%))`;
  });

  constructor() {
    effect(() => {
      const form = eventEditToFormValue(this.editData());
      this.title.set(form.title);
      this.description.set(form.description);
      this.bannerPreview.set(form.bannerUrl);
      this.dateLabel.set(form.dateLabel);
      this.timeRangeLabel.set(form.timeRangeLabel);
      this.status.set(form.status);
      this.location.set(form.location);
      this.capacity.set(form.capacity);
    });
  }

  protected onBannerSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) {
      return;
    }
    this.bannerPreview.set(URL.createObjectURL(file));
  }

  protected submitForm(): void {
    this.formError.set(null);
    this.saved.set(false);

    const payload: EventEditFormValue = {
      title: this.title(),
      description: this.description(),
      bannerUrl: this.bannerPreview(),
      dateLabel: this.dateLabel(),
      timeRangeLabel: this.timeRangeLabel(),
      status: this.status(),
      location: this.location(),
      capacity: this.capacity(),
    };

    const validationError = validateEventEditForm(payload);
    if (validationError) {
      this.formError.set(validationError);
      return;
    }

    this.submitted.emit(payload);
    this.saved.set(true);
  }
}
