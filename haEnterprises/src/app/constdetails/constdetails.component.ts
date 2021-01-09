import { Component, OnInit } from '@angular/core';
import { Work } from '../shared/work';
@Component({
  selector: 'app-constdetails',
  templateUrl: './constdetails.component.html',
  styleUrls: ['./constdetails.component.scss']
})
export class ConstdetailsComponent implements OnInit {
    WORK = {
    id: '0',
    name: 'Construction',
    image: '/assets/images/const1.jpg',
    category: 'mains',
    featured: true,
    label: 'Hot',
    price: '4.99',
    // tslint:disable-next-line:max-line-length
    description: 'Construction is a general term meaning the art and science to form objects, systems, or organizations, and comes from Latin constructio and Old French construction.',
    comments: [
         {
             rating: 5,
             comment: 'Imagine all the eatables, living in conFusion!',
             author: 'John Lemon',
             date: '2012-10-16T17:57:28.556094Z'
         },
         {
             rating: 4,
             comment: 'Sends anyone to heaven, I wish I could get my mother-in-law to eat it!',
             author: 'Paul McVites',
             date: '2014-09-05T17:57:28.556094Z'
         },
         {
             rating: 3,
             comment: 'Eat it, just eat it!',
             author: 'Michael Jaikishan',
             date: '2015-02-13T17:57:28.556094Z'
         },
         {
             rating: 4,
             comment: 'Ultimate, Reaching for the stars!',
             author: 'Ringo Starry',
             date: '2013-12-02T17:57:28.556094Z'
         },
         {
             rating: 2,
             comment: 'It\'s your birthday, we\'re gonna party!',
             author: '25 Cent',
             date: '2011-12-02T17:57:28.556094Z'
         }
     ]
    }
    work = this.WORK;

  constructor() { }

  ngOnInit() {
  }

}
