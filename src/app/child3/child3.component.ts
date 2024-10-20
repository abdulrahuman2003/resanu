import { Component,OnInit } from '@angular/core';
import { OrderdetailsService } from '../orderdetails.service';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child3Component implements OnInit{

  constructor(private service:OrderdetailsService) {}
  EventData:any;
  ngOnInit(): void {
    this.EventData= this.service.eventdetails;
  }
}



