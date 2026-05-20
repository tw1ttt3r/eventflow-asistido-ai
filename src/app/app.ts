import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { APP_CONFIG } from './core/config/app-config';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="min-h-screen bg-slate-950 text-slate-100">
      <div
        class="mx-auto flex min-h-screen max-w-3xl flex-col justify-center px-6 py-16"
        role="main"
      >
        <div
          class="rounded-2xl border border-slate-800 bg-slate-900/80 p-8 shadow-xl shadow-slate-950/50 backdrop-blur-sm"
        >
          <div class="mb-6 flex flex-wrap items-center gap-3">
            @if (isProduction()) {
              <span
                class="rounded-full bg-rose-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-rose-300 ring-1 ring-rose-500/30"
              >
                Producción
              </span>
            } @else {
              <span
                class="rounded-full bg-amber-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-300 ring-1 ring-amber-500/30"
              >
                En desarrollo
              </span>
            }
            <span
              class="rounded-full bg-indigo-500/15 px-3 py-1 text-xs font-medium text-indigo-300 ring-1 ring-indigo-500/30"
            >
              v{{ version() }}
            </span>
          </div>

          <h1 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {{ appName() }}
          </h1>

          <p class="mt-4 text-base leading-relaxed text-slate-400">
            La aplicación está en construcción. Este entorno muestra la configuración activa y el
            stack técnico del proyecto.
          </p>

          <dl class="mt-8 grid gap-4 sm:grid-cols-2">
            <div class="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
              <dt class="text-xs font-medium uppercase tracking-wide text-slate-500">API</dt>
              <dd class="mt-1 break-all font-mono text-sm text-indigo-300">{{ apiUrl() }}</dd>
            </div>
            <div class="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
              <dt class="text-xs font-medium uppercase tracking-wide text-slate-500">
                Secrets (NG_APP_*)
              </dt>
              <dd class="mt-1 text-sm text-slate-300">
                @if (hasApiKey()) {
                  <span class="text-emerald-400">API key configurada</span>
                } @else {
                  <span class="text-slate-500">Sin API key en .env</span>
                }
              </dd>
            </div>
          </dl>

          <div class="mt-8">
            <h2 class="text-xs font-semibold uppercase tracking-wide text-slate-500">Stack</h2>
            <ul class="mt-3 flex flex-wrap gap-2" aria-label="Tecnologías del proyecto">
              @for (item of stack; track item) {
                <li
                  class="rounded-lg border border-slate-700 bg-slate-800/80 px-3 py-1.5 text-sm text-slate-300"
                >
                  {{ item }}
                </li>
              }
            </ul>
          </div>
        </div>

        <p class="mt-8 text-center text-sm text-slate-600">
          Eventflow Asistido AI — asistido por agente en el IDE
        </p>
      </div>

      <router-outlet />
    </div>
  `,
})
export class App {
  private readonly config = inject(APP_CONFIG);

  protected readonly appName = computed(() => this.config.env.appName);
  protected readonly version = computed(() => this.config.env.version);
  protected readonly apiUrl = computed(() => this.config.env.apiUrl);
  protected readonly isProduction = computed(() => this.config.env.production);
  protected readonly hasApiKey = computed(() => this.config.secrets.apiKey !== null);

  protected readonly stack = [
    'Angular 21',
    'Tailwind CSS v4',
    'PWA',
    'pnpm',
    'Vite (dev server)',
  ] as const;
}
