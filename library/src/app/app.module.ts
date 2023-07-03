import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { ChipsModule } from 'primeng/chips';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import {MenubarModule} from "primeng/menubar";
import {TabMenuModule} from "primeng/tabmenu";
import {DividerModule} from "primeng/divider";
import {MenuModule} from "primeng/menu";

@NgModule({
  declarations: [AppComponent, HomeComponent, LoginComponent],
  imports: [
    BrowserModule,
    CardModule,
    ButtonModule,
    FormsModule,
    PasswordModule,
    ChipsModule,
    AppRoutingModule,
    MenubarModule,
    TabMenuModule,
    DividerModule,
    MenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
