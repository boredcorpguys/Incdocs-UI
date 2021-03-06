import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from '../header/header.component';
import { NopageComponent } from '../nopage/nopage.component';
import { HomeComponent } from '../home/home.component';
import { BankAdminNewCompanyComponent } from '../bank-admin-new-company/bank-admin-new-company.component';
import { BankAdminNewUserComponent } from '../bank-admin-new-user/bank-admin-new-user.component';
import { LoginComponent } from '../login/login.component';
import { AdminModifyComponent } from '../admin-modify/admin-modify.component';
import { AdminDeleteComponent } from '../admin-delete/admin-delete.component';
import { BankAdminBulkUploadComponent } from '../bank-admin-bulk-upload/bank-admin-bulk-upload.component';
import { GridComponent } from '../grid/grid.component';
import { BankRmManagePortfolioComponent } from '../bank-rm-manage-portfolio/bank-rm-manage-portfolio.component';
import { BankRmRequestNewCompanyComponent } from '../bank-rm-request-new-company/bank-rm-request-new-company.component';
import { BankRmChangeGhComponent } from '../bank-rm-change-gh/bank-rm-change-gh.component';

const appRoutes: Routes = [
    { path: 'nopage', component: NopageComponent, outlet: 'popup' },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'bank/admin/new-company', component: BankAdminNewCompanyComponent },
    { path: 'bank/admin/new-user', component: BankAdminNewUserComponent },
    { path: 'bank/admin/bulk-upload', component: BankAdminBulkUploadComponent },
    { path: 'bank/user/manage-portfolio', component: BankRmManagePortfolioComponent },
    { path: 'bank/rm/request-new-company', component: BankRmRequestNewCompanyComponent },
    { path: 'bank/rm/change-grouphead', component: BankRmChangeGhComponent },
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

