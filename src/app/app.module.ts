import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {LarangPaginatorModule} from "larang-paginator";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {PaginatorInterceptorService} from "./paginator-interceptor.service";
import {AngularTableSearcherModule} from "angular-table-searcher";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularTableSearcherModule.forRoot(),
    LarangPaginatorModule.forRoot()
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: PaginatorInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
