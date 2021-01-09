import { Component, OnInit } from '@angular/core';
import { Work } from '../shared/work';
import { DISHES } from '../shared/constfeatures';
import { DesignService } from '../services/design.service';


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
  constructor(private designService:DesignService) { }

  ngOnInit() {
    this.constFeatures= this.designService.getDesign();
  }

}
