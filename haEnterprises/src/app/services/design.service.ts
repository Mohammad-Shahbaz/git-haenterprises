import { Work } from '../shared/work';
import { DISHES } from '../shared/constfeatures';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DesignService {
  getDesign(): Work[] {
    return DISHES;
  }
  getFeaturedDesign():Work{
    return DISHES.filter((work) => work.featured)[0];
    }

  constructor() { }
}
