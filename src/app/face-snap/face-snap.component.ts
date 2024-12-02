import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [FaceSnapComponent],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit{
  title!: string;
  description!: string;
  createdAt!: Date;
  snaps!: number;
  imageURL!: string

  ngOnInit(): void {
    this.title = "Khyra et Upsy";
    this.description = "photo d'elles";
    this.createdAt = new Date();
    this.snaps = 5;
    this.imageURL = "https://www.empruntemontoutou.com/wp-content/uploads/2020/08/BRAQUE-WEIMAR.jpg";
  }
}
