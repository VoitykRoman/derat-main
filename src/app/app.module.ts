import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { IgxButtonModule, IgxIconModule, IgxCardModule, IgxRippleModule } from "igniteui-angular";

import { MenuComponent } from './menu/menu.component';
import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { IndexImageService } from './services/index-image.service';
import { ServicesCardsComponent } from './services-cards/services-cards.component';
import { ServiceCardComponent } from './services-cards/service-card/service-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CarouselComponent,
    ServicesCardsComponent,
    ServiceCardComponent
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
    BrowserAnimationsModule
  ],
  providers: [IndexImageService],
  exports: [CarouselComponent],
  bootstrap: [AppComponent,
    CarouselComponent]
})
export class AppModule {
}
