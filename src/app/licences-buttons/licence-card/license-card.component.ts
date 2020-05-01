import { Component, ViewChild, Input } from "@angular/core";
import { IgxExpansionPanelComponent, IgxToastComponent } from 'igniteui-angular';
import { LicenseCard } from 'src/app/models/license-card.model';
import { TranslateService } from 'src/app/services/translate.service';

@Component({
    selector: `app-main-license-card`,
    templateUrl: `license-card.component.html`,
    styleUrls: [`license-card.component.css`]
})
export class LicenseCardComponent {
   

   @Input() license: LicenseCard;
   @ViewChild(IgxExpansionPanelComponent, { read: IgxExpansionPanelComponent, static: true })
   public panel: IgxExpansionPanelComponent;
   @ViewChild(IgxToastComponent, { read: IgxToastComponent, static: true })
   public eventToast: IgxToastComponent;
   public readMore = "https://en.wikipedia.org/wiki/Hummingbird";
   // tslint:disable-next-line:max-line-length
   public imgSource = "https://upload.wikimedia.org/wikipedia/commons/4/46/Purple-throated_carib_hummingbird_feeding.jpg";
   public handleExpansion(evt?: {event: Event}) {
       this.eventToast.hide();
       console.log("Expanded event thrown ", (evt ? "with event: " + evt.event : "with no event"));
       this.eventToast.message = "Expanded Event Fired!";
      // this.eventToast.show();
   }
/**
 *
 */
constructor(public translateService: TranslateService) {
   
}
   public handleCollapse(evt?: {event: Event}) {
       this.eventToast.hide();
       console.log("Collapsed event thrown ", (evt ? "with event: " + evt.event : "with no event"));
       this.eventToast.message = "Collapsed Event Fired!";
       //this.eventToast.show();
   }
}
