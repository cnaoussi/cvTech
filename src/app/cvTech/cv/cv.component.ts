import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/model/Personne';
import { CvService } from '../cv.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {

 personnes: Personne [];
  constructor(
    private cvService: CvService
  ) {
    
   }

  ngOnInit() {
   this.cvService.getPersonnes().subscribe(
     (personnes) =>{
      this.personnes = personnes;
     },
     (error) =>{
       
      alert('Probleme d\' accès à l\'api les données affichées sont fake');
      console.log(error);
      this.personnes = this.cvService.getFakePersonne();
     }
   )
  }                    
}
