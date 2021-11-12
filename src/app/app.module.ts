import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CountdownModule } from 'ngx-countdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FloatingBannerComponent } from './floating-banner/floating-banner.component';
import { ProductsListingComponent } from './products-listing/products-listing.component';
import { CountDownTimer1Component } from './count-down-timer1/count-down-timer1.component';
import { CountDownTimer2Component } from './count-down-timer2/count-down-timer2.component';
import { StudentDataComponent } from './student-data/student-data.component';
import { DynamicDataComponent } from './dynamic-data/dynamic-data.component';
import { DisplayCounterComponent } from './counter-components/display-counter/display-counter.component';
import { CounterActionsComponent } from './counter-components/counter-actions/counter-actions.component';
import { CounterTimestampComponent } from './counter-components/counter-timestamp/counter-timestamp.component';
import { CounterCountComponent } from './counter-components/counter-count/counter-count.component';
import { FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialExampleModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    FloatingBannerComponent,
    ProductsListingComponent,
    CountDownTimer1Component,
    CountDownTimer2Component,
    StudentDataComponent,
    DynamicDataComponent,
    DisplayCounterComponent,
    CounterActionsComponent,
    CounterTimestampComponent,
    CounterCountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CountdownModule,
    FormsModule,
    AgGridModule.withComponents([]),
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialExampleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
