import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [FaceSnapComponent],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit{
@Input() faceSnap!: FaceSnap;

  userHasSnaped!:boolean;
  snapButtonText!:string;

  ngOnInit(): void {
   this.userHasSnaped = false;
    this.snapButtonText = "Oh snap!";
  }

  onSnap(): void{
    
      if(this.userHasSnaped){
        this.unSnap();
      }
      else{
       this.snap();
      }
    }

  unSnap():void {
    this.faceSnap.removeSnap();
      this.userHasSnaped = false;
      this.snapButtonText = "Oh snap!";
  }
  snap():void{
    this.faceSnap.addSnap();
    this.userHasSnaped = true;
    this.snapButtonText = "Oops, unsnap!";
  }
}
  

