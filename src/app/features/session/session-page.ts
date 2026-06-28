import { ChangeDetectionStrategy, Component, computed, inject, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';

import { AdminNavigationService } from '../admin/admin-navigation.service';
import { AppwriteAuthService } from '../../core/appwrite/appwrite-auth.service';
import { EfButton } from '../../shared/ui/atoms/button/button';
import { Heading } from '../../shared/ui/atoms/heading/heading';
import { Subheading } from '../../shared/ui/atoms/subheading/subheading';
import { AdminLayout } from '../../shared/ui/templates/admin-layout/admin-layout';

@Component({
  selector: 'app-session-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AdminLayout, Heading, Subheading, EfButton],
  template: `
    <ef-admin-layout activeNav="account" (navigate)="onNavigate($event)">
      <section class="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
        @if (loading()) {
          <p class="text-center text-sm text-slate-500">Cargando perfil…</p>
        } @else if (user(); as currentUser) {
          <div class="space-y-6">
            <div class="flex flex-col items-center gap-4 text-center">
              <div
                class="flex size-20 items-center justify-center rounded-full bg-ef-lavender text-2xl font-bold text-ef-purple"
                aria-hidden="true"
              >
                {{ initials() }}
              </div>
              <div class="space-y-1">
                <ef-heading>Account</ef-heading>
                <ef-subheading>{{ currentUser.name || currentUser.email }}</ef-subheading>
              </div>
            </div>

            <dl class="space-y-4 rounded-2xl bg-ef-surface px-5 py-4 text-sm text-slate-600">
              <div>
                <dt class="text-xs font-semibold uppercase tracking-wide text-slate-400">Nombre</dt>
                <dd class="mt-1 font-medium text-slate-900">{{ currentUser.name || '—' }}</dd>
              </div>
              <div>
                <dt class="text-xs font-semibold uppercase tracking-wide text-slate-400">Correo</dt>
                <dd class="mt-1 font-medium text-slate-900">{{ currentUser.email }}</dd>
              </div>
              <div>
                <dt class="text-xs font-semibold uppercase tracking-wide text-slate-400">User ID</dt>
                <dd class="mt-1 break-all font-mono text-xs text-slate-500">{{ currentUser.$id }}</dd>
              </div>
            </dl>

            <ef-button variant="blue" [disabled]="loggingOut()" (pressed)="logout()">
              {{ loggingOut() ? 'Cerrando sesión…' : 'Cerrar sesión' }}
            </ef-button>
          </div>
        }
      </section>
    </ef-admin-layout>
  `,
})
export class SessionPage implements OnInit {
  private readonly auth = inject(AppwriteAuthService);
  private readonly router = inject(Router);
  private readonly adminNav = inject(AdminNavigationService);

  protected readonly loading = signal(true);
  protected readonly loggingOut = signal(false);
  protected readonly user = signal<Awaited<ReturnType<AppwriteAuthService['getCurrentUser']>>>(null);

  protected readonly initials = computed(() => {
    const name = this.user()?.name?.trim() || this.user()?.email || '?';
    const parts = name.split(/\s+/).filter(Boolean);
    if (parts.length >= 2) {
      return `${parts[0]?.[0] ?? ''}${parts[1]?.[0] ?? ''}`.toUpperCase();
    }
    return name.slice(0, 2).toUpperCase();
  });

  ngOnInit(): void {
    void this.bootstrap();
  }

  private async bootstrap(): Promise<void> {
    const currentUser = await this.auth.getCurrentUser();
    this.user.set(currentUser);
    this.loading.set(false);
  }

  protected onNavigate(tabId: string): void {
    this.adminNav.navigate(tabId);
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
