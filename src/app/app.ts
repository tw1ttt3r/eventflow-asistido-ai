import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { OfflineConnectivityService } from '@features/offline/offline-connectivity.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<router-outlet />`,
})
export class App {
  /** Arranca listeners globales de conectividad (online/offline). */
  private readonly _connectivity = inject(OfflineConnectivityService);
}
