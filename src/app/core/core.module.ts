import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { httpInterceptorProviders } from './interceptors';
import { HeaderComponent } from './components/header/header.component';
import localeFrBe from '@angular/common/locales/fr-BE';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  exports:[
    HeaderComponent
  ],
  providers : [{ provide: LOCALE_ID, useValue: 'fr-BE' },
    httpInterceptorProviders,
  ]
})
export class CoreModule { 
  constructor(){
    registerLocaleData(localeFrBe);
  }
}
