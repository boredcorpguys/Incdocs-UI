import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from '../header/header.component';
import { NopageComponent } from '../nopage/nopage.component';
import { HomeComponent } from '../home/home.component';
import { NewCompanyComponent } from '../new-company/new-company.component';
import {NewRmComponent} from '../new-rm/new-rm.component';
import {LoginComponent} from '../login/login.component';
import {AdminModifyComponent} from '../admin-modify/admin-modify.component';
import {AdminDeleteComponent} from '../admin-delete/admin-delete.component';
import {BankAdminBulkUploadComponent} from '../bank-admin-bulk-upload/bank-admin-bulk-upload.component';
import {GridComponent} from '../grid/grid.component';
import {BankRmManagePortfolioComponent} from '../bank-rm-manage-portfolio/bank-rm-manage-portfolio.component';
const appRoutes: Routes = [
    { path: 'nopage', component: NopageComponent, outlet: 'popup' },
    { path: 'bank/admin/new-company', component: NewCompanyComponent},
    { path: 'bank/admin/new-rm', component: NewRmComponent },
    // { path: 'modify', component: AdminModifyComponent },
    // { path: 'delete', component: AdminDeleteComponent },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'bank/admin/bulk-upload', component: BankAdminBulkUploadComponent },
    { path: '', component: LoginComponent },
    // { path: '**', component: NopageComponent }
    { path: '**', component: BankRmManagePortfolioComponent }
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

