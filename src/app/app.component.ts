import { Component, OnInit } from '@angular/core';
import { CartService } from './service/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public totalItem : number=0;
  title = 'index';
  img:any="../assets/pngimg.com - pizza_PNG44094.png";

  constructor(private cartService :CartService){}

  ngOnInit(): void {
    this.cartService.getproducts()
    .subscribe(res=>{
      this.totalItem=res.length;
    })
  }
}
