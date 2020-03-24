import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { IgxButtonModule, IgxIconModule, IgxCardModule, IgxRippleModule, IgxAvatarModule, IgxToastModule, IgxExpansionPanelModule } from "igniteui-angular";

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
    LicenseCardComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FlexLayoutModule,
    HttpClientModule,
    IgxButtonModule,
    IgxIconModule,
    IgxCardModule,
    IgxRippleModule,
    BrowserAnimationsModule,
    IgxAvatarModule,
    IgxToastModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxIconModule,
		IgxAvatarModule,
		IgxToastModule,
		IgxExpansionPanelModule
  ],
  providers: [IndexImageService,
              TeamMemberService],
  exports: [CarouselComponent],
  bootstrap: [AppComponent,
    CarouselComponent]
})
export class AppModule {
}
