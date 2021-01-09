import { Component, OnInit } from '@angular/core';
import { Work } from '../shared/work';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})

// const DISHES: Dish[] = [

  
//   ];
 
export class MenuComponent implements OnInit {

  // dishes = DISHES;

  // selectedDish = DISHES[0];
  workdetail: Work[] = [
    {
      id: '0' ,
      name: 'Constructing',
      image: '/assets/images/const1.jpg',
      category: 'mains',
      featured: true,
      label: 'Hot',
      price: '4.99',
      // tslint:disable-next-line:max-line-length
      description: 'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'
    },
    {
      id: '1',
      name: 'Willis Tower',
      image: '/assets/images/const2.jpg',
      category: 'appetizer',
      featured: false,
      label: '',
      price: '1.99',
      description: 'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce'
    },
    {
      id: '2',
      name: 'Apartment',
      image: '/assets/images/const3.jpg',
      category: 'appetizer',
      featured: false,
      label: 'New',
      price: '1.99',
      description: 'A quintessential ConFusion experience, is it a vada or is it a donut?'
    },
    {
      id: '3',
      name: 'Instruments',
      image: '/assets/images/const4.jpg',
      category: 'dessert',
      featured: false,
      label: '',
      price: '2.99',
      description: 'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms'
    }
   ];

  constructor() { }

  ngOnInit() {
  }

}
