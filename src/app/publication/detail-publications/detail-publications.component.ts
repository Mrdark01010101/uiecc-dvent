import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StructureJournal } from '../../model/StructureJournal';
import { PublicationService } from '../publication.service';


@Component({
  selector: 'app-detail-publications',
  templateUrl: './detail-publications.component.html',
  styleUrls: ['./detail-publications.component.scss']
})
export class DetailPublicationsComponent implements OnInit {

  listPublcations: StructureJournal[];
  detailPublication: StructureJournal | undefined;
  constructor(
    private activetedRoute: ActivatedRoute,
    private publicationService: PublicationService
  ) {


  }
  // initialisation

  ngOnInit(): void {
    
    // recuperation de l'Id dans l'url get();

    const publicationId: string | null = this.activetedRoute.snapshot.paramMap.get('id');

    if (publicationId) {
      //getPublicationById() recupère l'id et effectu un rechercher dans la table de donnée

      this.detailPublication = this.publicationService.getPublicationById(+publicationId);
    }

  }

}
