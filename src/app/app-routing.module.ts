import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { Child3Component } from './child3/child3.component';
import { Child4Component } from './child4/child4.component';
import { Child5Component } from './child5/child5.component'
import { Child6Component } from './child6/child6.component';
import { Child7Component } from './child7/child7.component';
import { Child8Component } from './child8/child8.component';
import { Child9Component } from './child9/child9.component';


const routes: Routes = [
  {path:'',component:Child1Component},
  {path:'child1',component:Child1Component},
  {path:'child2',component:Child2Component},
  {path:'child2/:id',component:Child7Component},
  {path:'child3',component:Child3Component},
  {path:'child3/:id',component:Child8Component},
  {path:'child4',component:Child4Component},
  {path:'child5',component:Child5Component},
  {path:'child6',component:Child6Component},
  {path:'child9',component:Child9Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
