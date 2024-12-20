import {  NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { LandingPageComponent } from "./landing-page/components/landing-page/landing-page.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module.";
import { HttpClientModule } from "@angular/common/http";
import { CoreModule } from "./core/core.module";
import { FaceSnapsModule } from "./face-snaps/face-snaps.module";
import { LandingPageModule } from "./landing-page/landing-page.module";



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    FaceSnapsModule,
    LandingPageModule
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
