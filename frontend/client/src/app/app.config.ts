import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(withEventReplay()), provideAnimationsAsync(), provideFirebaseApp(() => initializeApp({ projectId: "protasker-442ad", appId: "1:389732175143:web:ea0160aab78ef0f8a02d02", storageBucket: "protasker-442ad.firebasestorage.app", apiKey: "AIzaSyCAehDNnD5a0GuYxbKJZx0t1PN9Z3D9gzY", authDomain: "protasker-442ad.firebaseapp.com", messagingSenderId: "389732175143" })), provideFirestore(() => getFirestore())]
};
