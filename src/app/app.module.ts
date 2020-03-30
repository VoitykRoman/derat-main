import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { IgxButtonModule, IgxIconModule, IgxCardModule, IgxRippleModule, IgxAvatarModule, IgxToastModule, IgxExpansionPanelModule, IgxListModule, IgxButtonGroupModule, IgxComboModule, IgxCarouselModule, IgxDropDownModule, IgxToggleModule, IgxSelectModule, IgxInputGroupModule, IgxDatePickerModule, IgxTimePickerModule } from "igniteui-angular";
import { MatMenuModule } from '@angular/material/menu';
import {Routes, RouterModule} from '@angular/router';

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
    RegisterComponent
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
    IgxInputGroupModule,
    IgxComboModule,
    IgxDatePickerModule,
    IgxTimePickerModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule

  ],
  providers: [IndexImageService,
    TeamMemberService,
    FeedbackService,
    LicenseService,
    CallBackService,
    AuthenticationService],
    
  exports: [CarouselComponent],
  bootstrap: [AppComponent,
    CarouselComponent,
    FooterComponent
  ]
})
export class AppModule {
}

