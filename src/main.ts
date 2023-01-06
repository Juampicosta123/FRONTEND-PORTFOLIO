import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlHHAbEN7tyd3SCkQPSM4bkbiqehffl-Q",
  authDomain: "portfolio-ef698.firebaseapp.com",
  projectId: "portfolio-ef698",
  storageBucket: "portfolio-ef698.appspot.com",
  messagingSenderId: "364262038516",
  appId: "1:364262038516:web:637180850f99def9b6f7a1",
  measurementId: "G-1TLB6Y5WYC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app)

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
