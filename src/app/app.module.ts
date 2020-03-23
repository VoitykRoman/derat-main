import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule }   from '@angular/common/http';

import { MenuComponent } from './menu/menu.component';
import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { IndexImageService } from './services/index-image.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  providers: [IndexImageService],
  exports: [CarouselComponent],
  bootstrap: [AppComponent,
              CarouselComponent]
})
export class AppModule { }
