import { Component, OnInit } from '@angular/core';
import {FaceSnapComponent } from './face-snap/face-snap.component'
import { FaceSnap } from './models/face-snap';


@Component({
  selector: 'app-root',
  standalone:true,
  imports: [FaceSnapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  faceSnaps!: FaceSnap[];

  mySnap!: FaceSnap;
  myOtherSnap!: FaceSnap;
  myLastSnap!: FaceSnap;
  ngOnInit(): void {
    this.faceSnaps = [
      new FaceSnap(
        "khyra", 
        "une photo de braque",
        "https://cercledesamateursdubraquedeweimar.com/wordpress/wp-content/uploads/2023/09/Oxford-de-Fantaisie-de-Kerma.png",
        new Date(),
        2 ),
        new FaceSnap(
          "Upsy", 
          "une photo de chien ressemblant à Upsy",
          "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRKdx7Q1i6MohqU96M9ApDEOdyvZNOJSyXjaAwKHwj7xVd2FFZMVoaPo6vXKZitaO8bQUXJ53JmOhFnPpibpINNmw",
          new Date(),
          3 ),
          new FaceSnap(
            "Teckel",
            "une photo de teckel",
            "https://tipaw-api-assets.s3.eu-central-1.amazonaws.com/img_uploads/e96e7c0e-92a0-4e76-bc41-890928b5dab9___.webp",
            new Date(),
            4
          )
    ]
    this.faceSnaps[1].location = "dans le jardin";
  }
}
