import { Component, OnInit, Input } from '@angular/core';
import { Personne } from 'src/app/model/Personne';
import { EmbaucheService } from '../embauche.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CvService } from '../cv.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
@Input() personne: Personne;
  constructor(private embaucherService: EmbaucheService,
               private router: Router,
               private cvService: CvService,
               private activatedRoute: ActivatedRoute
               ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params) => {
        console.log(params);
        this.cvService. getPersonneById(params.id);
        console.log(this.personne);
        
      }
    )
  }
  embaucher() {
    this.embaucherService.embaucher(this.personne)
  }
  GoToCv(){
    const link =['color']
    this.router.navigate(link);
  }
  moreInfo(){
    console.log("je reagit bien")
    const link =['add'];
    this.router.navigate(link);
  }

}
