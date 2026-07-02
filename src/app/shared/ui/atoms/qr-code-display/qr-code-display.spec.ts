import { TestBed } from '@angular/core/testing';
import { describe, expect, it } from 'vitest';

import { QrCodeDisplay } from '@shared/ui/atoms/qr-code-display/qr-code-display';

describe('QrCodeDisplay', () => {
  it('should render deterministic qr pattern', () => {
    TestBed.configureTestingModule({ imports: [QrCodeDisplay] });

    const fixture = TestBed.createComponent(QrCodeDisplay);
    fixture.componentRef.setInput('seed', 'EF-4A7C-9B2F');
    fixture.detectChanges();

    expect((fixture.nativeElement as HTMLElement).querySelectorAll('rect').length).toBeGreaterThan(50);
  });
});
