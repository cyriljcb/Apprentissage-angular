import {  NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module.";
import { HttpClientModule } from "@angular/common/http";
import { CoreModule } from "./core/core.module";
import { LandingPageModule } from "./landing-page/landing-page.module";



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    LandingPageModule
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
