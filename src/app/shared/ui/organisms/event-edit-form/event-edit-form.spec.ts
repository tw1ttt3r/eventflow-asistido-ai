import { TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { MOCK_EVENT_EDIT } from '@mock/event-edit.mock';
import { EventEditForm } from '@shared/ui/organisms/event-edit-form/event-edit-form';

type EventEditFormHarness = EventEditForm & {
  title: { set(value: string): void };
  description: { set(value: string): void };
  submitForm(): void;
};

describe('EventEditForm', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventEditForm],
    }).compileComponents();
  });

  it('should render edit sections from mock data', async () => {
    const fixture = TestBed.createComponent(EventEditForm);
    fixture.componentRef.setInput('editData', MOCK_EVENT_EDIT['1']!);
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Event details');
    expect(compiled.textContent).toContain('Schedule');
    expect(compiled.textContent).toContain('Registration summary');
    expect((compiled.querySelector('#event-edit-title') as HTMLInputElement).value).toContain(
      'Design Systems Workshop',
    );
  });

  it('should show validation error for empty title', async () => {
    const fixture = TestBed.createComponent(EventEditForm);
    const cmp = fixture.componentInstance as EventEditFormHarness;

    fixture.componentRef.setInput('editData', MOCK_EVENT_EDIT['1']!);
    fixture.detectChanges();
    await fixture.whenStable();

    cmp.title.set('');
    cmp.submitForm();
    fixture.detectChanges();

    expect((fixture.nativeElement as HTMLElement).textContent).toContain('Title is required');
  });

  it('should emit submitted for valid form', async () => {
    const fixture = TestBed.createComponent(EventEditForm);
    const submitted = vi.fn();
    const cmp = fixture.componentInstance as EventEditFormHarness;

    fixture.componentRef.setInput('editData', MOCK_EVENT_EDIT['1']!);
    fixture.componentInstance.submitted.subscribe(submitted);
    fixture.detectChanges();
    await fixture.whenStable();

    cmp.submitForm();
    fixture.detectChanges();

    expect(submitted).toHaveBeenCalledOnce();
    expect((fixture.nativeElement as HTMLElement).textContent).toContain('Changes saved locally');
  });

  it('should emit cancelled when cancel is pressed', async () => {
    const fixture = TestBed.createComponent(EventEditForm);
    const cancelled = vi.fn();

    fixture.componentRef.setInput('editData', MOCK_EVENT_EDIT['1']!);
    fixture.componentInstance.cancelled.subscribe(cancelled);
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();

    const cancelButton = Array.from(
      (fixture.nativeElement as HTMLElement).querySelectorAll('button'),
    ).find((button) => button.textContent?.includes('Cancel')) as HTMLButtonElement;
    cancelButton.click();

    expect(cancelled).toHaveBeenCalledOnce();
  });

  it('should preview banner from selected file', async () => {
    const fixture = TestBed.createComponent(EventEditForm);
    const createObjectURL = vi.spyOn(URL, 'createObjectURL').mockReturnValue('blob:banner');

    fixture.componentRef.setInput('editData', MOCK_EVENT_EDIT['1']!);
    fixture.detectChanges();
    await fixture.whenStable();

    const cmp = fixture.componentInstance as EventEditFormHarness & {
      onBannerSelected(event: Event): void;
    };
    const file = new File(['banner'], 'banner.jpg', { type: 'image/jpeg' });
    const input = document.createElement('input');
    input.type = 'file';
    Object.defineProperty(input, 'files', { value: [file] });
    cmp.onBannerSelected({ target: input } as unknown as Event);
    fixture.detectChanges();

    expect(createObjectURL).toHaveBeenCalledWith(file);
    expect((fixture.nativeElement as HTMLElement).querySelector('img')?.getAttribute('src')).toBe(
      'blob:banner',
    );

    createObjectURL.mockRestore();
  });
});
