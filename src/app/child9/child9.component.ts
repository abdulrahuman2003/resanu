import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';
import { OrderdetailsService } from '../orderdetails.service';

@Component({
  selector: 'app-child9',
  templateUrl: './child9.component.html',
  styleUrls: ['./child9.component.css']
})
export class Child9Component implements OnInit {
   
  public products:any=[];
  public grandTotal !:number;
  constructor(private cartService:CartService,private service:OrderdetailsService) {}
 
  ngOnInit(): void {

    this.cartService.getproducts()
    .subscribe(res=>{
      this.products=res;
      this.grandTotal = this.cartService.getTotalprice();
    })
  }
  removeItem(item:any){
    this.cartService.removeCartItem(item);
  }
emptycart(){
  this.cartService.removeAllCart();
}
}
