import { Component, Injectable } from '@angular/core';
import { getAuth, GoogleAuthProvider, signInWithPopup, } from 'firebase/auth';
import { CommonModule } from '@angular/common';
import { authState, Auth } from '@angular/fire/auth';
import { SharedDataService} from '../shard-data.service';


@Component({
  selector: 'app-auth-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './auth-page.component.html',
  styleUrl: './auth-page.component.css'
})

export class AuthPageComponent {
public loggedIn: boolean = false;
message = 'You are not logged in';
  
constructor(public auth: Auth, private SharedDataService: SharedDataService) {

  authState(this.auth).subscribe((response) => {
    console.log(response);
    if (response) {
      this.loggedIn = true;
      this.SharedDataService.setLoggedIn(this.loggedIn);
      console.log('User is logged in:', response);
    }
  });

  //this.SharedDataService.setLoggedIn(this.loggedIn);
}

isLoggedIn() {
  return this.loggedIn;
}


signinWithGoogle() {
  const provider = new GoogleAuthProvider();
  signInWithPopup(getAuth(), provider)
    .then((result) => {
      const user = result.user;
      console.log('User signed in with Google:', user);
      window.location.reload()
      
    })
    .catch((error) => {
      console.error('An error occurred during Google sign in:', error.code, error.message, error.email, error.credential);
    });
}



signOut() {
  const auth = getAuth();
  auth.signOut()
    .then(() => {
      console.log('User signed out successfully');
      window.location.reload()
    })
    .catch((error) => {
      console.error('An error occurred during sign out:', error);
    });
}

}


