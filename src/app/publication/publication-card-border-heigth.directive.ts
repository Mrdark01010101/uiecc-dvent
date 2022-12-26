import { Directive, ElementRef, HostListener, Input } from '@angular/core';
// la directive cardHeight permet de definir les actions qui vont ce passer quand l'utilisateur passe le curseur sur la card
@Directive({
  selector: '[appPublicationCardBorderHeigth]'
})
export class PublicationCardBorderHeigthDirective {

  defaultColor: string ='lightblue';
  initalColor: string = '#009688';
  constructor(private elementNative: ElementRef) {
    
    this.setBorder('#f5f5f5');
    //this.setHeight(200);

   }

  
//deffinir une varibble pour le appPublicationCardBorderHeigth 
@Input('appPublicationCardBorderHeigth') CardBorderHeigth :string;

// permettre de la appPublicationCardBorderHeigth de changer de changer de color quant lutilisateur passe avec la sourie
// hostListener per
@HostListener('mouseenter') onMouseEnter(){
  
  this.setBorder(this.CardBorderHeigth||this.defaultColor);

}

@HostListener('mouseleave') onMouseLeave(){
  this.setBorder(this.initalColor);
}

// permet de definir la taille de la card 
  setHeight(height: number){
    this.elementNative.nativeElement.style.height = height + 'px';
  }
// permet de definir le style de la card 
  setBorder(colorShadow: string){
    let border = 'box-shadow: 10px 10px 5px'+ colorShadow;

    this.elementNative.nativeElement.style.border = border;
  }
}
