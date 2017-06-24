import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  token: string;

  constructor(private router: Router){}

  singupUser (email: string, password: string){
    firebase.auth().createUserWithEmailAndPassword(email,password)
    .then(
      response => {
        this.router.navigate(['/']);
        //call for firebase currentUser to get the token
        firebase.auth().currentUser.getIdToken().then(
          (token: string) => this.token = token
        )
      }
    )
    .catch(
      error => console.log(error)
    );
  }

  singinUser(email:string, password: string){
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(
      response => {
        this.router.navigate(['/']);
        //call for firebase currentUser to get the token
        firebase.auth().currentUser.getIdToken().then(
          (token: string) => this.token = token
        )
      }
    )
    .catch(
      error => console.log(error.message)
    );
  }

  getToken(){
    firebase.auth().currentUser.getIdToken().then(
      (token: string) => this.token = token
    );

    return this.token;
  }

  isAunthenticated(){
    return this.token != null;
  }

  logout(){
    firebase.auth().signOut();
    this.token = null;
    this.router.navigate(['/signin']);
  }
}
