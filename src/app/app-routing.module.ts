import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListePublicationsComponent } from './publication/liste-publications/liste-publications.component';
import { DetailPublicationsComponent } from './publication/detail-publications/detail-publications.component';
import { HomeComponent } from './accuiel/home/home.component';
import { AvenirComponent } from './publication/avenir/avenir.component';

const routes: Routes = [
  {path: 'accuiel',component:HomeComponent},
  {path: '', redirectTo:'accuiel',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
