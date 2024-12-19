import { LOCALE_ID, NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { FaceSnapComponent } from "./face-snap/face-snap.component";
import { FaceSnapListComponent } from "./face-snap-list/face-snap-list.component";
import { HeaderComponent } from "./header/header.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { SingleFaceSnapComponent } from "./single-face-snap/single-face-snap.component";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule, registerLocaleData } from "@angular/common";
import { NewFaceSnapComponent } from "./new-face-snap/new-face-snap.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module.";
import { provideHttpClient } from "@angular/common/http";
import localeFrBe from '@angular/common/locales/fr-BE';
registerLocaleData(localeFrBe);


@NgModule({
  declarations: [
    AppComponent,
    FaceSnapComponent,
    FaceSnapListComponent,
    HeaderComponent,
    LandingPageComponent,
    SingleFaceSnapComponent,
    NewFaceSnapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    
  ],
  providers: [
       { provide: LOCALE_ID, useValue: 'fr-BE' },
       provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
