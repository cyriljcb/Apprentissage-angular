import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { FaceSnap } from '../models/face-snap';
import { FaceSnapService } from '../services/face-snaps.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-face-snap',
  standalone:false,
  templateUrl: './new-face-snap.component.html',
  styleUrl: './new-face-snap.component.scss'
})
export class NewFaceSnapComponent implements OnInit{

  snapForm!: FormGroup;
  faceSnapPreview$!: Observable<FaceSnap>;
  urlRegex!: RegExp;

  constructor(private formBuilder: FormBuilder,
              private faceSnapService : FaceSnapService,
              private router : Router){}

  ngOnInit(): void {
    this.urlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;

    this.snapForm = this.formBuilder.group({
      title: [null, Validators.required],
      description: [null, Validators.required],
      imageUrl : [null, [Validators.required, Validators.pattern(this.urlRegex)]],
      location : [null],
    }, {
      updateOn: 'blur' //lorsqu'on change de champs.
    }
  );
    //valueChanges est un observable qui va emmettre le formulaire des qu'un champ change.
    this.faceSnapPreview$ = this.snapForm.valueChanges.pipe(
      map(formValue=> ({
        ...formValue,  //... permet de récupérer tout les champs de formValue.
        createdAt: new Date(),
        id: 0,
        snaps: 0
      }))
    ); 

  }

  onSubmitForm():void{
    this.faceSnapService.addFaceSnap(this.snapForm.value);
    this.router.navigateByUrl('/facesnaps');
  }


}
