import { ApplicationConfig, importProvidersFrom } from "@angular/core";

import { provideHttpClient } from "@angular/common/http";

import { provideFirebaseApp, initializeApp } from "@angular/fire/app";
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideAuth, getAuth } from "@angular/fire/auth";


const firebaseConfig = {
    apiKey: "AIzaSyAAQeFem5agos8-UvRDUsZ-Cagr1zokumk",
    authDomain: "gameslist-6e2ac.firebaseapp.com",
    projectId: "gameslist-6e2ac",
    storageBucket: "gameslist-6e2ac.firebasestorage.app",
    messagingSenderId: "1043321442526",
    appId: "1:1043321442526:web:98674617379d7c20e1324f"
};

export const appConfig: ApplicationConfig = {
    providers: [
        provideHttpClient(),
        provideFirebaseApp(() => initializeApp(firebaseConfig)),
        provideFirestore(() => getFirestore()),
        provideAuth(() => getAuth()),
    ],
};


