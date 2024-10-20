import { Component, OnInit } from '@angular/core';
import { OrderdetailsService } from '../orderdetails.service';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  constructor(private service:OrderdetailsService, private cartService:CartService) {}
  foodData:any;
  ngOnInit(): void {
    this.foodData= this.service.foodDetails;

    this.foodData.forEach((a:any) => {
      Object.assign(a,{quantity:1,total:a.price});
    });
    
  }

  addtocart(fd:any){
    this.cartService.addtocart(fd);
    
  }
}
