import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';


import {AdminComponentComponent} from './admin-component/admin-component.component';
import {AdminMenuComponent} from './admin-menu/admin-menu.component';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';

import {userService} from './admin-shared/user.service';

const AdminRoutes: Routes = [
    {
        path : 'admin',
        component : AdminComponentComponent,
        children : [
            {path:'Admin' , component: AdminMenuComponent},
            {path:'login' , component: LoginComponent},
            {path:'signup' , component: SignupComponent},
            {path:'', component: AdminMenuComponent, canActivate:[userService] }
            ]
    },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(AdminRoutes)
  ],
  exports:[RouterModule],
  declarations: [
    AdminComponentComponent,
    AdminMenuComponent,
    LoginComponent,
    SignupComponent
  ],
  providers: [userService]
})
export class AdminModule { }