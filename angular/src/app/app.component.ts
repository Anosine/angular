import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { OnInit } from '@angular/core';
import { inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { Firestore } from 'firebase/firestore';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { AsyncPipe } from '@angular/common';

const firebaseConfig = {
  apiKey: "AIzaSyAAQeFem5agos8-UvRDUsZ-Cagr1zokumk",
  authDomain: "gameslist-6e2ac.firebaseapp.com",
  projectId: "gameslist-6e2ac",
  storageBucket: "gameslist-6e2ac.firebasestorage.app",
  messagingSenderId: "1043321442526",
  appId: "1:1043321442526:web:98674617379d7c20e1324f"
};



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterModule, RouterLink, RouterOutlet, RouterLinkActive, NavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  //firestore: Firestore = inject(Firestore);
  title = 'angular';
  //public db = getFirestore();
  ngOnInit(): void {
      //var db = getFirestore();
      //console.log(db);
  }

  constructor() {
    
    console.log('App component initialized');
    provideFirebaseApp(() => initializeApp(firebaseConfig));
    //provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth())
}
}
