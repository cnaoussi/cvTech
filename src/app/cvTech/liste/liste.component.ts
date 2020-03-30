import { Component, OnInit, Input } from '@angular/core';
import { Personne } from 'src/app/model/Personne';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.scss']
})
export class ListeComponent implements OnInit {
@Input() personnes: Personne[];
  constructor() { }

  ngOnInit(): void {
  }

}
