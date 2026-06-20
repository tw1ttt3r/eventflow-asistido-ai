import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { AppwriteService } from './core/appwrite/appwrite.service';
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
            <div class="rounded-xl border border-slate-800 bg-slate-950/60 p-4 sm:col-span-2">
              <dt class="text-xs font-medium uppercase tracking-wide text-slate-500">Appwrite</dt>
              <dd class="mt-1 space-y-1 text-sm text-slate-300">
                <p class="break-all font-mono text-indigo-300">{{ appwriteEndpoint() }}</p>
                <p>
                  @if (isAppwriteConfigured()) {
                    <span class="text-emerald-400">Proyecto configurado</span>
                    <span class="text-slate-500"> · </span>
                  } @else {
                    <span class="text-amber-300">Define variables NG_APP_* en .env</span>
                  }
                </p>
                @if (appwritePingStatus(); as status) {
                  <p
                    [class]="
                      status === 'ok'
                        ? 'text-emerald-400'
                        : status === 'error'
                          ? 'text-rose-400'
                          : 'text-slate-400'
                    "
                  >
                    Ping: {{ appwritePingMessage() }}
                  </p>
                }
              </dd>
            </div>
          </dl>

          <div class="mt-6 flex flex-wrap gap-3">
            <button
              type="button"
              class="rounded-lg bg-fuchsia-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-fuchsia-500 disabled:cursor-not-allowed disabled:opacity-50"
              [disabled]="!isAppwriteConfigured() || appwritePingStatus() === 'loading'"
              (click)="runAppwritePing()"
            >
              Probar conexión Appwrite
            </button>
          </div>

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
  private readonly appwrite = inject(AppwriteService);

  protected readonly appName = computed(() => this.config.appName);
  protected readonly version = computed(() => this.config.version);
  protected readonly apiUrl = computed(() => this.config.apiUrl);
  protected readonly isProduction = computed(() => this.config.production);
  protected readonly hasApiKey = computed(() => this.config.apiKey !== '');
  protected readonly appwriteEndpoint = computed(() => this.appwrite.configuration.endpoint);
  protected readonly appwriteProjectId = computed(() => this.appwrite.configuration.projectId);
  protected readonly isAppwriteConfigured = computed(() => this.appwrite.isConfigured());

  protected readonly appwritePingStatus = signal<'idle' | 'loading' | 'ok' | 'error'>('idle');
  protected readonly appwritePingMessage = signal('');

  protected readonly stack = [
    'Angular 21',
    'Appwrite',
    'Tailwind CSS v4',
    'PWA',
    'pnpm',
    'Vite (dev server)',
  ] as const;

  protected async runAppwritePing(): Promise<void> {
    this.appwritePingStatus.set('loading');
    this.appwritePingMessage.set('conectando…');

    try {
      await this.appwrite.ping();
      this.appwritePingStatus.set('ok');
      this.appwritePingMessage.set('conexión correcta');
    } catch (error) {
      this.appwritePingStatus.set('error');
      this.appwritePingMessage.set(
        error instanceof Error ? error.message : 'Error al conectar con Appwrite',
      );
    }
  }
}
