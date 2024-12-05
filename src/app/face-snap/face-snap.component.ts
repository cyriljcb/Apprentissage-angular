import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { DatePipe, LowerCasePipe, NgClass, NgStyle, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { FaceSnapService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [
    NgStyle,
    NgClass,
    TitleCasePipe,
    DatePipe
  ],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit{
@Input() faceSnap!: FaceSnap;

  userHasSnaped!:boolean;
  snapButtonText!:string;

  constructor(private faceSnapService: FaceSnapService) {

  }

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
    this.faceSnapService.snapFaceSnapById(this.faceSnap.id,'unsnap');
    this.userHasSnaped = false;
    this.snapButtonText = "Oh snap!";
  }
  snap():void{
    this.faceSnapService.snapFaceSnapById(this.faceSnap.id,'snap');
    this.userHasSnaped = true;
    this.snapButtonText = "Oops, unsnap!";
  }
}
  

