import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../core/models/face-snap';
import { FaceSnapService } from '../core/services/face-snaps.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-single-face-snap',
  standalone:false,
  templateUrl: './single-face-snap.component.html',
  styleUrl: './single-face-snap.component.scss'
})
export class SingleFaceSnapComponent implements OnInit {
  faceSnap$!:Observable<FaceSnap>;
  buttonText!: string;

  constructor(private faceSnapsService: FaceSnapService,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.buttonText = 'Oh Snap!';
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap$ = this.faceSnapsService.getFaceSnapById(faceSnapId);
  }

  onSnap(faceSnapId: number) {
    if (this.buttonText === 'Oh Snap!') {
      this.faceSnap$ = this.faceSnapsService.snapFaceSnapById(faceSnapId, 'snap').pipe(
        tap(()=> this.buttonText = 'Oops, unSnap!')
      );

    } else {
      this.faceSnap$ = this.faceSnapsService.snapFaceSnapById(faceSnapId, 'unsnap').pipe(
        tap(()=>this.buttonText = 'Oh Snap!')
     );
    }
  }
}

