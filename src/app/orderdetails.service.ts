import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderdetailsService {

  constructor() { }

// fooddetails

foodDetails=[{
  id:1,
  foodName:"periyani",
  fooddetails:"chiken periyani",
  foodprice:200,
  foodImg:"..//../assets/home1.png",
  total:200,

},
{
  id:2,
  foodName:"GRILL",
  fooddetails:"  chiken grill ",
  foodprice:300,
  foodImg:"..//../assets/home2 (1).png",
  total:300,
},
{
  id:3,
  foodName:"pure veg",
  fooddetails:" helthy pur veg",
  foodprice:150,
  foodImg:"..//../assets/veg1.png",
  total:150,
},
]
eventdetails=[

  {
    id:1,
    EventName:"CUSTOM PARTIES",
    Eventdetails:"Some quick example text to build on the card title and make up the bulk of the ",
    Eventprice:2999,
    EventImg:"..//../assets/event/pexels-jonathan-borba-3563173.jpg"
  },

  {
    id:2,
    EventName:"BIRTHDAY PARTIES",
    Eventdetails:"Some quick example text to build on the card title and make up the bulk of the ",
    Eventprice:2000,
    EventImg:"..//../assets/event/birthday2 .jpg"
  },

  {
    id:3,
    EventName:"PRIVATE PARTIES",
    Eventdetails:"Some quick example text to build on the card title and make up the bulk of the ",
    Eventprice:3999,
    EventImg:"..//../assets/event/pexels-helena-lopes-696218.jpg"
  }
]

}
