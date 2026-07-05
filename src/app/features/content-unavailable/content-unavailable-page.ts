import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { MOCK_CONTENT_UNAVAILABLE } from '@mock/content-unavailable.mock';
import { ContentUnavailableCard } from '@shared/ui/organisms/content-unavailable-card/content-unavailable-card';
import { ContentUnavailableLayout } from '@shared/ui/templates/content-unavailable-layout/content-unavailable-layout';

@Component({
  selector: 'app-content-unavailable-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ContentUnavailableLayout, ContentUnavailableCard],
  template: `
    <ef-content-unavailable-layout (explorePress)="goHome()">
      <ef-content-unavailable-card [copy]="copy" (goHomePress)="goHome()" />
    </ef-content-unavailable-layout>
  `,
})
export class ContentUnavailablePage {
  private readonly router = inject(Router);

  protected readonly copy = MOCK_CONTENT_UNAVAILABLE;

  protected goHome(): void {
    void this.router.navigate(['/events']);
  }
}
