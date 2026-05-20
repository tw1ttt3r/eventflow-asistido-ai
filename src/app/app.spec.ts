import { TestBed } from '@angular/core/testing';

import { APP_CONFIG } from './core/config/app-config';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [
        {
          provide: APP_CONFIG,
          useValue: {
            env: {
              production: false,
              apiUrl: 'http://localhost:3000',
              appName: 'Eventflow Asistido (dev)',
              version: '0.0.0',
            },
            secrets: { apiKey: null },
          },
        },
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render development status and app name', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.textContent).toContain('En desarrollo');
    expect(compiled.textContent).toContain('Eventflow Asistido (dev)');
    expect(compiled.textContent).toContain('http://localhost:3000');
  });
});
