import { Component, OnInit } from '@angular/core';
import { Work } from '../shared/work';
import { DesignService } from '../services/design.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  work: Work;
  promotion: Promotion;

  constructor(private designservice: DesignService,
    private promotionservice: PromotionService) { }

  ngOnInit() {
    this.work = this.designservice.getFeaturedDesign();
    this.promotion = this.promotionservice.getFeaturedPromotion();
  }

}
