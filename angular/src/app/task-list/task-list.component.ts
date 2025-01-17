import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthPageComponent } from "./auth-page/auth-page.component";
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { ApiComponent } from './api/api.component';
//import { LoginComponent } from "./api/api.component";
const firebaseConfig = {
  apiKey: "AIzaSyAAQeFem5agos8-UvRDUsZ-Cagr1zokumk",
  authDomain: "gameslist-6e2ac.firebaseapp.com",
  projectId: "gameslist-6e2ac",
  storageBucket: "gameslist-6e2ac.firebasestorage.app",
  messagingSenderId: "1043321442526",
  appId: "1:1043321442526:web:98674617379d7c20e1324f"
};


@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [AuthPageComponent, CommonModule, ApiComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  constructor(){
     initializeApp(firebaseConfig);
  }

  
}
