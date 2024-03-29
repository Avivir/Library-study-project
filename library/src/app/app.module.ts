import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
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
import {InputTextModule} from "primeng/inputtext";
import { BookManageComponent } from './bookManage/book-manage.component';
import {DropdownModule} from "primeng/dropdown";
import {RippleModule} from "primeng/ripple";
import {TabViewModule} from "primeng/tabview";
import {NavbarComponent} from "./menu/navbar.component";
import {ConfirmationService, MessageService} from "primeng/api";
import { RegisterComponent } from './register/register.component';
import {TableModule} from "primeng/table";
import {DialogModule} from "primeng/dialog";
import {CalendarModule} from "primeng/calendar";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {DialogService} from "primeng/dynamicdialog";
import { PanelModule } from 'primeng/panel';
import { HistoryComponent } from './history/history.component';
@NgModule({
  declarations: [AppComponent, HomeComponent, LoginComponent, BookManageComponent, NavbarComponent, RegisterComponent, HistoryComponent],
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
    InputTextModule,
    DropdownModule,
    ReactiveFormsModule,
    RippleModule,
    TabViewModule,
    TableModule,
    DialogModule,
    CalendarModule,
    BrowserAnimationsModule,
    PanelModule,
  ],
  providers: [MessageService, ConfirmationService, DialogService],
  bootstrap: [AppComponent]
})
export class AppModule {}
