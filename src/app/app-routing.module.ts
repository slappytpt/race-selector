import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RacesComponent }      from './races/races.component';
import { MainComponent }   from './main/main.component';
import { CartComponent }   from './cart/cart.component';
import { RaceDetailComponent }  from './race-detail/race-detail.component';

const routes: Routes = [
  { path: 'races', component: RacesComponent },
  { path: 'main', component: MainComponent },
  { path: 'cart', component: CartComponent },
  { path: '', redirectTo: '/races', pathMatch: 'full' },
  { path: 'detail/:id', component: RaceDetailComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
 	exports: [ RouterModule ]
})


export class AppRoutingModule {}
