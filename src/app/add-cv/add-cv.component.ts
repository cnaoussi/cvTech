import { Component, OnInit } from '@angular/core';
import { CvService } from '../cvTech/cv.service';
import { Router } from '@angular/router';
import { Personne } from '../model/Personne';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-cv',
  templateUrl: './add-cv.component.html',
  styleUrls: ['./add-cv.component.scss']
})
export class AddCvComponent implements OnInit {
  errorMessage = "";

  constructor(private cvService: CvService,
              private router: Router
            ) { }

  ngOnInit()  {

  }

  addPersonne(formulaire:  NgForm){
    this.cvService.addPersonne(formulaire.value).subscribe(
      (response) => {
        console.log(formulaire);
        // const link = ['cv'];
        // this.router.navigate(link);
      },
      (error) => {
        this.errorMessage = `Problème de connexion. Prière de consulter l'administarteur`;
      }
    )  
  }
  //  addPersonne(formulaire:  NgForm){
  //   console.log(formulaire.value);
  //  }
}
