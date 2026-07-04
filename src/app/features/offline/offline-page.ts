import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';

import { OfflineConnectivityService } from '@features/offline/offline-connectivity.service';
import { MOCK_OFFLINE_STATUS } from '@mock/offline.mock';
import { OfflineStatusCard } from '@shared/ui/organisms/offline-status-card/offline-status-card';
import { OfflineLayout } from '@shared/ui/templates/offline-layout/offline-layout';

@Component({
  selector: 'app-offline-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [OfflineLayout, OfflineStatusCard],
  template: `
    <ef-offline-layout>
      <ef-offline-status-card
        [lastCheckedLabel]="connectivity.lastCheckedLabel()"
        [title]="statusCopy.title"
        [description]="statusCopy.description"
        [retrying]="retrying()"
        (retryPress)="retryConnection()"
      />
    </ef-offline-layout>
  `,
})
export class OfflinePage {
  private readonly router = inject(Router);
  protected readonly connectivity = inject(OfflineConnectivityService);

  protected readonly statusCopy = MOCK_OFFLINE_STATUS;
  protected readonly retrying = signal(false);

  protected async retryConnection(): Promise<void> {
    this.retrying.set(true);
    this.connectivity.tickLastCheckedLabel();

    await new Promise((resolve) => setTimeout(resolve, 600));

    const online = this.connectivity.refreshStatus();
    this.retrying.set(false);

    if (online) {
      void this.router.navigateByUrl(this.connectivity.returnUrl());
    }
  }
}
