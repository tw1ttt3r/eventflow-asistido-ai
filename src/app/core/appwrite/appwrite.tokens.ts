import { InjectionToken } from '@angular/core';
import type { Client } from 'appwrite';

import type { AppwriteConfig } from '@core/appwrite/appwrite.config';

export const APPWRITE_CONFIG = new InjectionToken<AppwriteConfig>('APPWRITE_CONFIG');
export const APPWRITE_CLIENT = new InjectionToken<Client>('APPWRITE_CLIENT');
