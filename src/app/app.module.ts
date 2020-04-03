import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { IgxButtonModule, IgxIconModule, IgxCardModule, IgxRippleModule, IgxAvatarModule, IgxToastModule, IgxExpansionPanelModule, IgxListModule, IgxButtonGroupModule, IgxComboModule, IgxCarouselModule, IgxDropDownModule, IgxToggleModule, IgxSelectModule, IgxInputGroupModule, IgxDatePickerModule, IgxTimePickerModule, IgxNavigationDrawerModule, IgxLayoutModule, IgxTabsModule, IgxAutocompleteModule, IgxSliderModule } from "igniteui-angular";
import { MatMenuModule } from '@angular/material/menu';
import { Routes, RouterModule } from '@angular/router';

import { MenuComponent } from './menu/menu.component';
import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { IndexImageService } from './services/index-image.service';
import { ServicesCardsComponent } from './services-cards/services-cards.component';
import { ServiceCardComponent } from './services-cards/service-card/service-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TeamCarouselComponent } from './team-carousel/team-carousel.component';
import { TeamCardComponent } from './team-carousel/team-card.component/team-card.component';
import { TeamMemberService } from './services/team-memberservice';
import { LicensesButtonsComponent } from './licences-buttons/licences-buttons.component';
import { LicenseCardComponent } from './licences-buttons/licence-card/license-card.component';
import { FeedbackCardComponent } from './feedback-card/feedback-card.component';
import { FeedbackRatingComponent } from './feedback-card/feedback-rating/feedback-rating.component';
import { FeedbackListComponent } from './feedback-card/feedback-list/feedback-list.component';
import { FeedbackService } from './services/feedback.service';
import { LicenseService } from './services/license.service';
import { ContactsComponent } from './contacts/contacts.component';
import { GoogleMapComponent } from './googlemap/googlemap.component';
import { FooterComponent } from './footer/footer.component';
import { DropDownComponent } from './menu/dropdown/dropdown.component';
import { CallBackComponent } from './callback/callback.component';
import { CallBackService } from './services/callback.service';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { PriceCalculatorComponent } from './service/price-calculator/price-calculator.component';
import { LoginComponent } from './main/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from './main/services/authentication.service';
import { RegisterComponent } from './main/register/register.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { ProjectsComponent } from './admin-menu/projects/projects.component';
import { CreateProjectComponent, AutocompletePipeStartsWith } from './admin-menu/projects/create-project/create-project.component';
import { Base64Service } from './shared/base64.service';
import { ProjectsService } from './admin-menu/services/projects.service';
import { OrganizationsService } from './admin-menu/services/organizations.service';
import { UserService } from './main/services/user.service';
import { ProjectCardComponent } from './admin-menu/projects/project-card/project-card.component';
import { OrganizationsComponent } from './admin-menu/organizations/organizations.component';
import { OrganizationCardComponent } from './admin-menu/organizations/organization-card/organization-card.component';
import { CreateOrganizationComponent } from './admin-menu/organizations/create-organization/create-organization.component';
import { ProjectsDetailsComponent } from './admin-menu/projects/project-details/project-details.component';
import { EmployeeCardComponent } from './admin-menu/projects/project-details/employee-card/employee-card.component';
import { AddEmployeeComponent } from './admin-menu/projects/project-details/add-employee/add-employee.component';
import { OrganizationsDetailsComponent } from './admin-menu/organizations/organizations-details/organizations-details.component';
import { FacilitiesListComponent } from './admin-menu/organizations/organizations-details/facilities-list/facilities-list.component';
import { AddFacilityComponent } from './admin-menu/organizations/organizations-details/add-facility/add-facility.component';
import { FacilityService } from './admin-menu/services/facility.service';
import { ClientCardComponent } from './admin-menu/organizations/organizations-details/client-card/client-card.component';
import { AddClientComponent } from './admin-menu/organizations/organizations-details/add-client/add-client.component';
import { ProjectsOrgComponent } from './admin-menu/organizations/organizations-details/projects/projects.component';
import { FacilitiesComponent } from './admin-menu/facilities/facilities.component';
import { PerimeterCardComponent } from './admin-menu/facilities/perimeter-card/perimeter-card.component';
import { AddPerimeterComponent } from './admin-menu/facilities/add-perimeter/add-perimeter.component';
import { PerimeterService } from './admin-menu/services/perimeters.service';
import { PerimetersComponent } from './admin-menu/perimeters/perimeters.component';
import { TrapCardComponent } from './admin-menu/perimeters/trap-card/trap-card.component';
import { CreateTrapComponent } from './admin-menu/perimeters/create-trap/create-trap.component';
import { TrapService } from './admin-menu/services/trap.service';
import { TrapsComponent } from './admin-menu/traps/traps.component';

const adminRoutes: Routes = [
  {
    path: 'projects', component: ProjectsComponent
  },
  {
    path: 'organizations', component: OrganizationsComponent
  },
  {
    path: 'projects/:id', component: ProjectsDetailsComponent
  },
  {
    path: 'organizations/:id', component: OrganizationsDetailsComponent
  },
  {
    path: 'facilities/:id', component: FacilitiesComponent
  },
  {
    path: 'perimeters/:id', component: PerimetersComponent
  },
  {
    path: 'traps/:id', component: TrapsComponent
  }
]

const appRoutes: Routes = [
  {
    path: "", component: HomeComponent
  },
  {
    path: "services", component: ServiceComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'menu', component: AdminMenuComponent, children: adminRoutes
  }
];



@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    ServicesCardsComponent,
    ServiceCardComponent,
    TeamCarouselComponent,
    TeamCardComponent,
    LicensesButtonsComponent,
    LicenseCardComponent,
    FeedbackCardComponent,
    FeedbackRatingComponent,
    FeedbackListComponent,
    ContactsComponent,
    GoogleMapComponent,
    FooterComponent,
    MenuComponent,
    DropDownComponent,
    CallBackComponent,
    HomeComponent,
    ServiceComponent,
    PriceCalculatorComponent,
    LoginComponent,
    RegisterComponent,
    AdminMenuComponent,
    ProjectsComponent,
    CreateProjectComponent,
    AutocompletePipeStartsWith,
    ProjectCardComponent,
    OrganizationCardComponent,
    OrganizationsComponent,
    CreateOrganizationComponent,
    ProjectsDetailsComponent,
    EmployeeCardComponent,
    AddEmployeeComponent,
    OrganizationsDetailsComponent,
    FacilitiesListComponent,
    AddFacilityComponent,
    ClientCardComponent,
    AddClientComponent,
    ProjectsOrgComponent,
    FacilitiesComponent,
    PerimeterCardComponent,
    AddPerimeterComponent,
    PerimetersComponent,
    TrapCardComponent,
    CreateTrapComponent,
    TrapsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    NgbModule,
    FlexLayoutModule,
    HttpClientModule,
    IgxButtonModule,
    IgxCardModule,
    IgxRippleModule,
    IgxToastModule,
    BrowserAnimationsModule,
    IgxIconModule,
    IgxAvatarModule,
    IgxExpansionPanelModule,
    IgxListModule,
    IgxButtonGroupModule,
    IgxCarouselModule,
    MatMenuModule,
    IgxDropDownModule,
    IgxToggleModule,
    IgxSelectModule,
    IgxComboModule,
    IgxDatePickerModule,
    IgxTimePickerModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    IgxNavigationDrawerModule,
    IgxLayoutModule,
    IgxTabsModule,
    IgxAutocompleteModule,
    IgxSliderModule,
    IgxInputGroupModule

  ],
  providers: [IndexImageService,
    TeamMemberService,
    FeedbackService,
    LicenseService,
    CallBackService,
    AuthenticationService,
    Base64Service,
    ProjectsService,
    OrganizationsService,
    UserService,
    FacilityService,
    PerimeterService,
    TrapService],

  exports: [CarouselComponent],
  bootstrap: [AppComponent,
    CarouselComponent,
    FooterComponent
  ]
})
export class AppModule {
}

