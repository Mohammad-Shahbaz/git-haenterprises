import { Component, OnInit } from '@angular/core';
import { Work } from '../shared/work';
import { DISHES } from '../shared/constfeatures';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})

// const DISHES: Dish[] = [

  
//   ];
 
export class MenuComponent implements OnInit {

  constFeatures: Work[]=DISHES ;

  selectedWork: Work;

  onSelect(work: Work) {
    this.selectedWork = work;
  }
  constructor() { }

  ngOnInit() {
  }

}
