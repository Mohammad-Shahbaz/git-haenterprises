import { Component, OnInit,Input } from '@angular/core';
import { Work } from '../shared/work';
import { DISHES } from '../shared/constfeatures';

@Component({
  selector: 'app-constdetails',
  templateUrl: './constdetails.component.html',
  styleUrls: ['./constdetails.component.scss']
})
export class ConstdetailsComponent implements OnInit {

  @Input()
  work: Work;
  constFeatures: Work[]=DISHES ;
  constructor() { }

  ngOnInit() {
  }

}
