import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
// application specific imports
import { AppComponent } from './app.component';
import { NopageComponent } from './nopage/nopage.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './router/app-routing.module';
import { HomeComponent } from './home/home.component';
import { BankAdminNewCompanyComponent } from './bank-admin-new-company/bank-admin-new-company.component';
import { BankAdminNewUserComponent } from './bank-admin-new-user/bank-admin-new-user.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/services/login.service';
import { AdminFetchCurrentMappingsService } from './admin-modify/services/admin-fetch-current-mappings.service';
import { AdminUserActionsService } from './services/admin-user-actions.service';
import { AdminCompaniesActionsService } from './services/admin-companies-actions.service';
// angular material design modules
import { AppMaterialDesignModule } from './material/app-material-design.module';
import { AdminModifyComponent } from './admin-modify/admin-modify.component';
import { AdminUpdateMappingPopupComponent } from './admin-modify/admin-update-mapping-popup/admin-update-mapping-popup.component';
import { AdminDeleteComponent } from './admin-delete/admin-delete.component';
import { AdminFetchCurrentUsersService } from './services/admin-fetch-current-users.service';
import { AdminDeleteConfirmationComponent } from './admin-delete/admin-delete-confirmation/admin-delete-confirmation.component';
import { BankAdminBulkUploadComponent } from './bank-admin-bulk-upload/bank-admin-bulk-upload.component';
import { InputFileComponent } from './util/input-file/input-file.component';
import { AdminFetchCurrentCompaniesService } from './services/admin-fetch-current-companies.service';
import { AdminDeleteMappingConfirmationComponent } from './admin-delete/admin-delete-mapping-confirmation/admin-delete-mapping-confirmation.component';
import { AdminUserModifyPopupComponent } from './admin-modify/admin-user-modify-popup/admin-user-modify-popup.component';

import { DataService } from './data.service';
import { HomeService } from './home/services/home.service';
import { BankAdminNewCompanyService } from './bank-admin-new-company/services/bank-admin-new-company.service';
import { BankAdminNewUserService } from './bank-admin-new-user/services/bank-admin-new-user.service';
import { BankAdminBulkUploadService } from './bank-admin-bulk-upload/services/bank-admin-bulk-upload.service';

//slickgrid specifics
import { AngularSlickgridModule } from 'angular-slickgrid';
import { GridComponent } from './grid/grid.component';
import { TranslateModule } from '@ngx-translate/core';
import { BankRmManagePortfolioComponent } from './bank-rm-manage-portfolio/bank-rm-manage-portfolio.component';
import { BankRmManagePortfolioDetailsService } from './bank-rm-manage-portfolio/services/bank-rm-manage-portfolio-details.service';

//loader specifics
import { LoadingModule } from 'ngx-loading';
import { LoaderComponent } from './util/loader/loader.component';

//sub components
import { BankAdminCreateNewUserPopupComponent } from './bank-admin-new-user/sub-components/bank-admin-create-new-user-popup/bank-admin-create-new-user-popup.component';
import { DeleteMappingConfirmationPopupComponent } from './bank-rm-manage-portfolio/sub-components/delete-mapping-confirmation-popup/delete-mapping-confirmation-popup.component';

import { BankRmAddMappingComponent } from './bank-rm-manage-portfolio/sub-components/bank-rm-add-mapping/bank-rm-add-mapping.component';
import { BankRmRequestNewCompanyComponent } from './bank-rm-request-new-company/bank-rm-request-new-company.component';
import { BankRmRequestNewCompanyService } from './bank-rm-request-new-company/services/bank-rm-request-new-company.service';
import { BankRmChangeGhComponent } from './bank-rm-change-gh/bank-rm-change-gh.component';
import { GenericConfirmationPopupComponent } from './util/generic-confirmation-popup/generic-confirmation-popup.component';


@NgModule({
  declarations: [
    AppComponent,
    NopageComponent,
    HeaderComponent,
    HomeComponent,
    BankAdminNewCompanyComponent,
    BankAdminNewUserComponent,
    LoginComponent,
    AdminModifyComponent,
    AdminUpdateMappingPopupComponent,
    AdminDeleteComponent,
    AdminDeleteConfirmationComponent,
    BankAdminBulkUploadComponent,
    InputFileComponent,
    AdminDeleteMappingConfirmationComponent,
    AdminUserModifyPopupComponent,
    GridComponent,
    BankRmManagePortfolioComponent,
    LoaderComponent,
    BankAdminCreateNewUserPopupComponent,
    DeleteMappingConfirmationPopupComponent,
    BankRmRequestNewCompanyComponent,
    BankRmAddMappingComponent,
    BankRmChangeGhComponent,
    GenericConfirmationPopupComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    AppMaterialDesignModule,
    AngularSlickgridModule.forRoot(),
    TranslateModule.forRoot(),
    LoadingModule,
    HttpClientModule
  ],
  entryComponents: [
    AdminUpdateMappingPopupComponent,
    AdminDeleteConfirmationComponent,
    AdminDeleteMappingConfirmationComponent,
    AdminUpdateMappingPopupComponent,
    AdminUserModifyPopupComponent,
    BankAdminCreateNewUserPopupComponent,
    BankRmRequestNewCompanyComponent,
    DeleteMappingConfirmationPopupComponent,
    GenericConfirmationPopupComponent
  ],
  providers: [LoginService, AdminFetchCurrentMappingsService, AdminUserActionsService,
    AdminFetchCurrentUsersService, AdminFetchCurrentCompaniesService, AdminUserActionsService,
    AdminCompaniesActionsService, BankRmManagePortfolioDetailsService, DataService, HomeService,
    BankAdminNewCompanyService, BankAdminNewUserService, BankAdminBulkUploadService, BankRmRequestNewCompanyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
