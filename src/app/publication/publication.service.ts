import { Injectable } from '@angular/core';
import { StructureJournal } from '../model/StructureJournal';
import { INFOPUBLIER } from '../model/infojournal';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {


  getPublication():StructureJournal[]{
    return INFOPUBLIER;
  }

  getPublicationById(publicationId:number):StructureJournal | undefined{
    return INFOPUBLIER.find(publication => publication.id == +publicationId);
  }


}
