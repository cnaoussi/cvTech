import { Component, OnInit, Input } from '@angular/core';
import { Personne } from 'src/app/model/Personne';
import { EmbaucheService } from '../embauche.service';

@Component({
  selector: 'app-embauche',
  templateUrl: './embauche.component.html',
  styleUrls: ['./embauche.component.scss']
})
export class EmbaucheComponent implements OnInit {
@Input() personne: Personne;
  constructor(private embaucheService: EmbaucheService) {

   }

  ngOnInit(): void {
  
  }
  embaucher(){
    this.embaucheService.embaucher(this.personne)
  }

}
