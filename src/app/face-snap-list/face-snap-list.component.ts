import { Component, OnDestroy, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { FaceSnapService } from '../services/face-snaps.service';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-face-snap-list',
  standalone:false,
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss'
})
export class FaceSnapListComponent implements OnInit, OnDestroy {
  faceSnaps!: FaceSnap[];
  private destroy$! : Subject<boolean> ; //Subject est un observable qui va émettre lorsqu'on le souhaite. 

  constructor(private faceSnapsService: FaceSnapService){}

  ngOnInit(): void {
   // this.destroy$ = new Subject<boolean>();
    
    this.faceSnaps = this.faceSnapsService.getFaceSnaps();
    
    // interval(1000).pipe(
    //   //take(3),  //permet de prendre le nombre d'émission que l'on souhaite
    //   takeUntil(this.destroy$), //prendre les valeurs de l'observable jusqu'a ce que destroy emette qqch. destroy va émettre qqch à la destruction
    //   tap(console.log)
    // ).subscribe();  //seuls les observables souscrits avec subscribe nécessitent un unsubscribe.
  }


  ngOnDestroy(): void {
    //this.destroy$.next(true);
  }
}
