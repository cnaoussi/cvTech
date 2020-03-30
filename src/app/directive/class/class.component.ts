import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.scss']
})
export class ClassComponent implements OnInit {
  est = true;
  barca = true;
  milan = false;
  constructor() { }

  ngOnInit(): void {
  }
  changeTeam(){
    this.est = true;
    this.barca = true;
    this.milan = true;
  }

}
