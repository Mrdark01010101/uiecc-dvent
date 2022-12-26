import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StructureJournal } from '../../model/StructureJournal';
import { PublicationService } from '../publication.service';

@Component({
  selector: 'app-liste-publications',
  templateUrl: './liste-publications.component.html',
  styleUrls: ['./liste-publications.component.scss']
})
export class ListePublicationsComponent implements OnInit {

  listPublications:StructureJournal[];

  constructor(
    private routeurDetail:Router,
    private publicationService:PublicationService)
    
    {

  }

  ngOnInit(): void {
    // initialise la varible liste publications avec les publication de la base de donnée de la fonction
    // getPublication() qui est dans le service de publication
    this.listPublications = this.publicationService.getPublication();
  }

  // la fonction goDetail recupère l'id d'une publication dans l'url pour nous permettre d'aller dans la page de detail de cette publication
  // avec la fonction navigate de router detail
  goToDetail( publication:StructureJournal){
    this.routeurDetail.navigate(['/publication',publication.id]);
  }
  
}
