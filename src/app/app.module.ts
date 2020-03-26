import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { IgxButtonModule, IgxIconModule, IgxCardModule, IgxRippleModule, IgxAvatarModule, IgxToastModule, IgxExpansionPanelModule, IgxListModule, IgxButtonGroupModule } from "igniteui-angular";

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
import { FormsModule } from '@angular/forms';
import { FeedbackCardComponent } from './feedback-card/feedback-card.component';
import { FeedbackRatingComponent } from './feedback-card/feedback-rating/feedback-rating.component';
import { FeedbackListComponent } from './feedback-card/feedback-list/feedback-list.component';
import { FeedbackService } from './services/feedback.service';
import { LicenseService } from './services/license.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CarouselComponent,
    ServicesCardsComponent,
    ServiceCardComponent,
    TeamCarouselComponent,
    TeamCardComponent,
    LicensesButtonsComponent,
    LicenseCardComponent,
    FeedbackCardComponent,
    FeedbackRatingComponent,
    FeedbackListComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FlexLayoutModule,
    HttpClientModule,
    IgxButtonModule,
    IgxCardModule,
    IgxRippleModule,
    IgxToastModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxIconModule,
		IgxAvatarModule,
    IgxExpansionPanelModule,
    IgxListModule,
    IgxButtonGroupModule
  ],
  providers: [IndexImageService,
              TeamMemberService,
              FeedbackService,
              LicenseService],
  exports: [CarouselComponent],
  bootstrap: [AppComponent,
    CarouselComponent,
  ]
})
export class AppModule {
}
