import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BodyComponent } from './body/body.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductSidebarComponent } from './product-sidebar/product-sidebar.component';
import { ProductBodyComponent } from './product-body/product-body.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    BodyComponent,
    ProductSidebarComponent,
    ProductBodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
