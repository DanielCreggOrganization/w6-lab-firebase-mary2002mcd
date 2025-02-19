import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideFirebaseApp(() => initializeApp({
      apiKey: "AIzaSyCsF2mKJzgDpyVeN8vy-FQKUNNejJVNSYQ",
      authDomain: "fir-ionic-project-416df.firebaseapp.com",
      projectId: "fir-ionic-project-416df",
      storageBucket: "fir-ionic-project-416df.appspot.com",
      messagingSenderId: "957187375607",
      appId: "1:957187375607:web:9e1d078cc83aefb2e66ef2"
    })),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
});
