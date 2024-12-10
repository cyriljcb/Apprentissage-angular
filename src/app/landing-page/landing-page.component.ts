import { Component } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  imports: [
    FormsModule,
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

  onSubmitForm(form: NgForm):void{
    console.log(form.value);
  }
}
