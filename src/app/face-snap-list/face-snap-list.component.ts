import { Component, OnDestroy, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { FaceSnapService } from '../services/face-snaps.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-face-snap-list',
  standalone:false,
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss'
})
export class FaceSnapListComponent implements OnInit{

  faceSnaps$!: Observable<FaceSnap[]>;

  constructor(private faceSnapsService: FaceSnapService){}

  ngOnInit(): void {
    
    this.faceSnaps$ = this.faceSnapsService.getAllFaceSnaps();
  }
}
