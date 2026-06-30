import { TestBed } from '@angular/core/testing';
import { describe, expect, it } from 'vitest';

import { EfIcon } from '@shared/ui/atoms/icon/icon';

describe('EfIcon', () => {
  it('should render icon svg by name', () => {
    TestBed.configureTestingModule({
      imports: [EfIcon],
    });

    const fixture = TestBed.createComponent(EfIcon);
    fixture.componentRef.setInput('name', 'chevron-left');
    fixture.componentRef.setInput('size', 'md');
    fixture.detectChanges();

    const svg = (fixture.nativeElement as HTMLElement).querySelector('svg');
    expect(svg).toBeTruthy();
    expect(svg?.getAttribute('viewBox')).toBe('0 0 20 20');
    expect(svg?.querySelector('path')).toBeTruthy();
  });

  it('should apply custom classes', () => {
    TestBed.configureTestingModule({
      imports: [EfIcon],
    });

    const fixture = TestBed.createComponent(EfIcon);
    fixture.componentRef.setInput('name', 'search');
    fixture.componentRef.setInput('iconClass', 'text-ef-blue');
    fixture.detectChanges();

    const svg = (fixture.nativeElement as HTMLElement).querySelector('svg');
    expect(svg?.classList.contains('text-ef-blue')).toBe(true);
  });
});
