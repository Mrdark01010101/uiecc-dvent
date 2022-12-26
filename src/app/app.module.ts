import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselComponent } from './accuiel/carousel/carousel.component';
import { HeaderComponent } from './share/header/header.component';
import { AlaUneComponent } from './accuiel/ala-une/ala-une.component';
import { FooterComponent } from './share/footer/footer.component';
import { HomeComponent } from './accuiel/home/home.component';
import { PublicationModule } from './publication/publication.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    HeaderComponent,
    AlaUneComponent,
    FooterComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PublicationModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
