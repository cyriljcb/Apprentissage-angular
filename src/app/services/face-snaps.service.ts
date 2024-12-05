import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap";


@Injectable({
    providedIn : 'root' })
export class FaceSnapService {
    private faceSnaps: FaceSnap[] = [
        new FaceSnap(
          "khyra", 
          "une photo de braque",
          "https://cercledesamateursdubraquedeweimar.com/wordpress/wp-content/uploads/2023/09/Oxford-de-Fantaisie-de-Kerma.png",
          new Date(),
          2 ),
        new FaceSnap(
            "upsy", 
            "une photo de chien ressemblant à Upsy",
            "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRKdx7Q1i6MohqU96M9ApDEOdyvZNOJSyXjaAwKHwj7xVd2FFZMVoaPo6vXKZitaO8bQUXJ53JmOhFnPpibpINNmw",
            new Date(),
            150 ).withLocation("dans le jardin"),
        new FaceSnap(
            "Teckel",
            "une photo de teckel",
            "https://tipaw-api-assets.s3.eu-central-1.amazonaws.com/img_uploads/e96e7c0e-92a0-4e76-bc41-890928b5dab9___.webp",
            new Date(),
            254
        )
      ];

      getFaceSnaps(): FaceSnap[] {
        return [... this.faceSnaps];
      }

}