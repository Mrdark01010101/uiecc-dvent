import { Component, Input, OnInit } from '@angular/core';
import { PublicationService } from '../publication.service';
import { StructureJournal } from '../../model/StructureJournal';

@Component({
  selector: 'app-form-publication',
  templateUrl: './form-publication.component.html',
  styleUrls: ['./form-publication.component.scss']
})
export class FormPublicationComponent implements OnInit{
  @Input() publication: StructureJournal;
  publicationList:StructureJournal[];
  constructor(private servicePublication:PublicationService){

  }

  ngOnInit(): void {
    
    //recuperations des publications dans le service publication avec la methode 
    this.publicationList = this.servicePublication.getPublication();
    
  }


  onSubmit(){
    
  }
}
