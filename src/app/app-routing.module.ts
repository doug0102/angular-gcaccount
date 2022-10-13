import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForbiddenComponent } from './components/forbidden/forbidden.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';
import { AuthorizationGuard } from './guards/authorization/authorization.guard';
import { LoginGuard } from './guards/login/login.guard';

const routes: Routes = [
  { 
    path: '', 
    component: LoginComponent,
    canActivate: [LoginGuard]
  },
  { 
    path: 'login', 
    component: LoginComponent,
    canActivate: [LoginGuard]
  },
  { 
    path: 'home', 
    component: HomeComponent,
    canActivate: [AuthorizationGuard]
  },
  { 
    path: 'forbidden', 
    component: ForbiddenComponent,
  },
  { 
    path: 'unauthorized', 
    component: UnauthorizedComponent 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
