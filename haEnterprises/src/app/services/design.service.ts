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

  constructor() { }
}
