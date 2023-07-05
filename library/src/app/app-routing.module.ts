import { NgModule } from '@angular/core';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {RouterModule, Routes} from "@angular/router";
import {AuthGuard} from "./AuthGuard";
import {BookManageComponent} from "./bookManage/book-manage.component";
import {RegisterComponent} from "./register/register.component";
import {HistoryComponent} from "./history/history.component";

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard]  },
  { path: 'history', component: HistoryComponent, canActivate: [AuthGuard]  },
  { path: 'bookManage', component: BookManageComponent, canActivate: [AuthGuard]  },
  { path: 'register', component: RegisterComponent, canActivate: [AuthGuard]  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
