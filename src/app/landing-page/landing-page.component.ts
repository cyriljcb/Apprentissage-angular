import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  imports: [
    RouterLink,
    FormsModule
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
  
  userEmail!: string;


  constructor(private router: Router){

  }

  onContinue(){
    this.router.navigateByUrl('facesnaps');
  }

  onSubmitForm():void{
    console.log(this.userEmail);
  }
}
