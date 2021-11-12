import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountDownTimer1Component } from './count-down-timer1/count-down-timer1.component';
import { CountDownTimer2Component } from './count-down-timer2/count-down-timer2.component';
import { DynamicDataComponent } from './dynamic-data/dynamic-data.component';
import { FloatingBannerComponent } from './floating-banner/floating-banner.component';
import { ProductsListingComponent } from './products-listing/products-listing.component';
import { StudentDataComponent } from './student-data/student-data.component';

const routes: Routes = [
  {
    path: 'floating-banner', component: FloatingBannerComponent
  },
  {
    path: 'products-listing', component: ProductsListingComponent
  },
  {
    path: 'timer1', component: CountDownTimer1Component
  },
  {
    path: 'timer2', component: CountDownTimer2Component
  },
  {
    path: 'student-data', component: StudentDataComponent
  },
  {
    path: 'dynamic-data', component: DynamicDataComponent
  },
  { path: '', redirectTo: '/floating-banner', pathMatch: 'full' },
  { path: '**', redirectTo: '/floating-banner', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
