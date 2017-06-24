import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  loadedFeature = 'recipe';

  ngOnInit(){
    //Initialize Firebase
    firebase.initializeApp({
      apiKey: "AIzaSyB-z0cy0zEHF_U1oW0d2FLH23d_Hlkk_is",
      authDomain: "recipes-book-47236.firebaseapp.com"
    });
  }

  onNavigate(feature:string){
    this.loadedFeature = feature;
  }
}
