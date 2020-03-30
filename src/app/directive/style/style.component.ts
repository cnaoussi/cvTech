import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.scss']
})
export class StyleComponent implements OnInit {
   @Input() color =  ' white';
   @Input() bgColor= 'lightblue';
   size = '25px';
  constructor() { }

  ngOnInit(): void {
  }
  changeSize(size){
    this.size = size + 'px';
  }

}
