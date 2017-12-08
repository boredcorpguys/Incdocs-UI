import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from '../header/header.component';
import { NopageComponent } from '../nopage/nopage.component';
import { HomeComponent } from '../home/home.component';
import { NewCompanyComponent } from '../new-company/new-company.component';
import {NewRmComponent} from '../new-rm/new-rm.component';
import {LoginComponent} from '../login/login.component';
import {AdminModifyComponent} from '../admin-modify/admin-modify.component';
const appRoutes: Routes = [
    { path: 'nopage', component: NopageComponent, outlet: 'popup' },
    { path: 'new-company', component: NewCompanyComponent},
    { path: 'new-rm', component: NewRmComponent },
    { path: 'modify', component: AdminModifyComponent },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: '', component: LoginComponent },
    { path: '**', component: NopageComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            {
                enableTracing: false, // <-- debugging purposes only
            }
        )
    ],
    exports: [
        RouterModule
    ],
    providers: [
    ]
})
export class AppRoutingModule { }

