import { TestBed } from '@angular/core/testing';
import { describe, expect, it } from 'vitest';

import { EfAvatar } from '@shared/ui/atoms/avatar/avatar';

describe('EfAvatar', () => {
  it('should render initials when no image is provided', () => {
    TestBed.configureTestingModule({ imports: [EfAvatar] });

    const fixture = TestBed.createComponent(EfAvatar);
    fixture.componentRef.setInput('fullName', 'Jane Doe');
    fixture.detectChanges();

    expect((fixture.nativeElement as HTMLElement).textContent).toContain('JD');
    expect((fixture.nativeElement as HTMLElement).querySelector('img')).toBeNull();
  });

  it('should render image when url is provided', () => {
    TestBed.configureTestingModule({ imports: [EfAvatar] });

    const fixture = TestBed.createComponent(EfAvatar);
    fixture.componentRef.setInput('fullName', 'Jane Doe');
    fixture.componentRef.setInput('imageUrl', 'https://example.com/avatar.jpg');
    fixture.detectChanges();

    const img = (fixture.nativeElement as HTMLElement).querySelector('img');
    expect(img?.getAttribute('src')).toBe('https://example.com/avatar.jpg');
  });
});
