import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { DatePipe, LowerCasePipe, NgClass, NgStyle, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { FaceSnapService } from '../services/face-snaps.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  standalone: true,
  imports: [
    NgStyle,
    NgClass,
    TitleCasePipe,
    DatePipe,
    RouterLink
  ],
  templateUrl: './single-face-snap.component.html',
  styleUrl: './single-face-snap.component.scss'
})
export class SingleFaceSnapComponent implements OnInit{
  faceSnap!: FaceSnap;

  userHasSnaped!:boolean;
  snapButtonText!:string;

  constructor(private faceSnapService: FaceSnapService,
              private route : ActivatedRoute) {

  }

  ngOnInit(): void {
    this.prepareInterface();
    this.getFaceSnap();
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

  private prepareInterface(){
    this.userHasSnaped = false;
    this.snapButtonText = "Oh snap!";
  }
  private getFaceSnap(){
    const faceSnapId = this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapService.getFaceSnapById(faceSnapId);
  }
}
  

