import { ChangeDetectionStrategy, Component, computed, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AppwriteAuthService } from '../../core/appwrite/appwrite-auth.service';
import { EfButton } from '../../shared/ui/atoms/button/button';
import { Heading } from '../../shared/ui/atoms/heading/heading';
import { Subheading } from '../../shared/ui/atoms/subheading/subheading';
import { AuthLayout } from '../../shared/ui/templates/auth-layout/auth-layout';

export type SessionFlow = 'register' | 'login';

@Component({
  selector: 'app-session-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AuthLayout, Heading, Subheading, EfButton],
  template: `
    <ef-auth-layout>
      <section class="w-full max-w-xl rounded-3xl bg-white p-6 shadow-xl shadow-slate-200/60 sm:p-8">
        @if (loading()) {
          <p class="text-center text-sm text-slate-500">Verificando sesión…</p>
        } @else if (user(); as currentUser) {
          <div class="space-y-6 text-center">
            <div class="space-y-2">
              <ef-heading>{{ heading() }}</ef-heading>
              <ef-subheading>{{ subheading() }}</ef-subheading>
            </div>

            <dl class="rounded-2xl bg-ef-surface px-5 py-4 text-left text-sm text-slate-600">
              <div class="space-y-3">
                <div>
                  <dt class="text-xs font-semibold uppercase tracking-wide text-slate-400">Nombre</dt>
                  <dd class="mt-1 font-medium text-slate-900">{{ currentUser.name || '—' }}</dd>
                </div>
                <div>
                  <dt class="text-xs font-semibold uppercase tracking-wide text-slate-400">Correo</dt>
                  <dd class="mt-1 font-medium text-slate-900">{{ currentUser.email }}</dd>
                </div>
                <div>
                  <dt class="text-xs font-semibold uppercase tracking-wide text-slate-400">ID</dt>
                  <dd class="mt-1 break-all font-mono text-xs text-slate-500">{{ currentUser.$id }}</dd>
                </div>
              </div>
            </dl>

            <p class="text-xs text-slate-400">
              Vista temporal — aquí irá el dashboard de EventFlow.
            </p>

            <div class="flex flex-col gap-3 sm:flex-row">
              <ef-button variant="purple" (pressed)="goToAuth()">Volver a auth</ef-button>
              <ef-button variant="blue" [disabled]="loggingOut()" (pressed)="logout()">
                {{ loggingOut() ? 'Cerrando sesión…' : 'Cerrar sesión' }}
              </ef-button>
            </div>
          </div>
        }
      </section>
    </ef-auth-layout>
  `,
})
export class SessionPage implements OnInit {
  private readonly auth = inject(AppwriteAuthService);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  protected readonly loading = signal(true);
  protected readonly loggingOut = signal(false);
  protected readonly user = signal<Awaited<ReturnType<AppwriteAuthService['getCurrentUser']>>>(null);
  protected readonly flow = signal<SessionFlow>('login');

  protected readonly heading = computed(() =>
    this.flow() === 'register' ? '¡Cuenta creada!' : 'Sesión iniciada',
  );

  protected readonly subheading = computed(() => {
    const name = this.user()?.name || this.user()?.email || 'usuario';
    return this.flow() === 'register'
      ? `Bienvenido a EventFlow, ${name}. Tu sesión ya está activa.`
      : `Hola de nuevo, ${name}. Accediste correctamente.`;
  });

  ngOnInit(): void {
    void this.bootstrap();
  }

  private async bootstrap(): Promise<void> {
    const flowParam = this.route.snapshot.queryParamMap.get('flow');
    if (flowParam === 'register' || flowParam === 'login') {
      this.flow.set(flowParam);
    }

    const currentUser = await this.auth.getCurrentUser();
    this.user.set(currentUser);
    this.loading.set(false);
  }

  protected goToAuth(): void {
    void this.router.navigate(['/auth']);
  }

  protected async logout(): Promise<void> {
    this.loggingOut.set(true);

    try {
      await this.auth.logout();
      await this.router.navigate(['/auth']);
    } finally {
      this.loggingOut.set(false);
    }
  }
}
