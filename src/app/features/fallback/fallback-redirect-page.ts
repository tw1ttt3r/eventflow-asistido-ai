import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AppwriteAuthService } from '@core/appwrite/appwrite-auth.service';

/** Redirige rutas desconocidas según sesión activa. */
@Component({
  selector: 'app-fallback-redirect',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '',
})
export class FallbackRedirectPage implements OnInit {
  private readonly auth = inject(AppwriteAuthService);
  private readonly router = inject(Router);

  ngOnInit(): void {
    void this.redirect();
  }

  private async redirect(): Promise<void> {
    const user = await this.auth.getCurrentUser();
    await this.router.navigate(user ? ['/events'] : ['/auth']);
  }
}
