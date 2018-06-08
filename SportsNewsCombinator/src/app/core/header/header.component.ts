import {Component, OnInit} from '@angular/core';
/**Definimos Component Decorator y enlazamos HTML y CSS */
@Component({
  selector: 'snc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit
{
  constructor(){}
  ngOnInit(){}
}
