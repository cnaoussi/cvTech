import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  visibility = false;
  constructor() { }

  ngOnInit(): void {
  }
  show(){
    this.visibility = !this.visibility;
  }
}
