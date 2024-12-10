import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap";
import { Title } from "@angular/platform-browser";


@Injectable({
    providedIn : 'root' })
export class FaceSnapService {
    private faceSnaps: FaceSnap[] =[
      {
        id: 1,
        title: "khyra",
        description:  "une photo de braque" ,
        imageUrl:  "https://cercledesamateursdubraquedeweimar.com/wordpress/wp-content/uploads/2023/09/Oxford-de-Fantaisie-de-Kerma.png",
        createdAt : new Date(),
        snaps: 15 ,
        location: "dans une foret" , 
      },
      {
        id: 2,
        title: "Upsy",
        description: "une deuxieme photo de braque",
        imageUrl: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRKdx7Q1i6MohqU96M9ApDEOdyvZNOJSyXjaAwKHwj7xVd2FFZMVoaPo6vXKZitaO8bQUXJ53JmOhFnPpibpINNmw",
        createdAt : new Date(),
        snaps: 147,
        location: "", 
      },
      {
        id: 3,
        title: "un teckel",
        description: "une photo d'un teckel",
        imageUrl: "https://tipaw-api-assets.s3.eu-central-1.amazonaws.com/img_uploads/e96e7c0e-92a0-4e76-bc41-890928b5dab9___.webp",
        createdAt : new Date(),
        snaps: 240,
        location: "quelque part dans le monde", 
      },
      {
        id: 4,
        title: "Berger allemand",
        description: "une photo d'un berger allemand",
        imageUrl: "data:image/jpeg;base64,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",
        createdAt : new Date(),
        snaps: 7,
        location: "", 
      }
    ];
    

      getFaceSnaps(): FaceSnap[] {
        return [... this.faceSnaps];
      }

      getFaceSnapById(faceSnapId: number): FaceSnap {
        const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
        if (!faceSnap) {
          throw new Error('FaceSnap not found!');
        } else {
          return faceSnap;
        }
      }


      snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
        const faceSnap = this.getFaceSnapById(faceSnapId);
        snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
      }

      addFaceSnap(formValue: {title: string, description: string, imageUrl: string, location?: string}){
        const faceSnap: FaceSnap = {
          ...formValue,
          createdAt: new Date(),
          snaps : 0,
          id: this.faceSnaps[this.faceSnaps.length-1].id+1
        };
        this.faceSnaps.push(faceSnap);
      }
      

}