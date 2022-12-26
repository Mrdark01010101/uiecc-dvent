import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailPublicationsComponent } from './detail-publications/detail-publications.component';
import { ListePublicationsComponent } from './liste-publications/liste-publications.component';
import { AvenirComponent } from './avenir/avenir.component';
import { Routes, RouterModule } from '@angular/router';
import { CardPublicationsComponent } from './card-publications/card-publications.component';
import { PublicationCardBorderHeigthDirective } from './publication-card-border-heigth.directive';
import { FormPublicationComponent } from './form-publication/form-publication.component';
import { FormsModule } from '@angular/forms';



const PublicationsRoutes: Routes = [
  {path: 'publications',component: ListePublicationsComponent},
  {path: 'publication/:id',component: DetailPublicationsComponent},
  {path: 'evenements-avenir/:id',component: AvenirComponent},
  {path: 'article',component: FormPublicationComponent},
];

@NgModule({
  declarations: [
  DetailPublicationsComponent,
  ListePublicationsComponent,
  AvenirComponent,
  CardPublicationsComponent,
  PublicationCardBorderHeigthDirective,
  FormPublicationComponent,
  ],
  imports: [
    RouterModule.forChild(PublicationsRoutes),
    FormsModule,
    CommonModule
  ]
})
export class PublicationModule { }
