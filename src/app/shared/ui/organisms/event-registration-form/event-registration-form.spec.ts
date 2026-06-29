import { TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { EventRegistrationForm } from '@shared/ui/organisms/event-registration-form/event-registration-form';

type EventRegistrationFormHarness = EventRegistrationForm & {
  fullName: { set(value: string): void; (): string };
  email: { set(value: string): void; (): string };
  phone: { set(value: string): void; (): string };
  termsAccepted: { set(value: boolean): void; (): boolean };
  submitForm(): void;
};

describe('EventRegistrationForm', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventRegistrationForm],
    }).compileComponents();
  });

  it('should emit submitted when form is valid', () => {
    const fixture = TestBed.createComponent(EventRegistrationForm);
    const submitted = vi.fn();
    const cmp = fixture.componentInstance as EventRegistrationFormHarness;

    fixture.componentRef.setInput('submitting', false);
    cmp.submitted.subscribe(submitted);

    cmp.fullName.set('Alexandra Rivera');
    cmp.email.set('alex@example.com');
    cmp.phone.set('');
    cmp.termsAccepted.set(true);
    cmp.submitForm();

    expect(submitted).toHaveBeenCalledWith({
      fullName: 'Alexandra Rivera',
      email: 'alex@example.com',
      phone: '',
      termsAccepted: true,
    });
  });

  it('should show phone validation error for invalid numbers', () => {
    const fixture = TestBed.createComponent(EventRegistrationForm);
    const cmp = fixture.componentInstance as EventRegistrationFormHarness & {
      touchPhone: { set(value: boolean): void };
    };

    cmp.phone.set('invalid');
    cmp.touchPhone.set(true);
    fixture.detectChanges();

    expect((fixture.nativeElement as HTMLElement).textContent).toContain(
      'Invalid phone number format',
    );
  });

  it('should emit saveForLater when secondary action is pressed', () => {
    const fixture = TestBed.createComponent(EventRegistrationForm);
    const saveForLater = vi.fn();

    fixture.componentRef.setInput('submitting', false);
    fixture.componentInstance.saveForLater.subscribe(saveForLater);
    fixture.detectChanges();

    const button = Array.from(
      (fixture.nativeElement as HTMLElement).querySelectorAll('button'),
    ).find((item) => item.textContent?.includes('Save for later'));
    button?.click();

    expect(saveForLater).toHaveBeenCalledOnce();
  });
});
