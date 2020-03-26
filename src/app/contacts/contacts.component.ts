import {Component} from '@angular/core';
import { IgxIconService } from "igniteui-angular";

/**
 * @title Basic divider
 */
@Component({
  selector: 'app-main-contacts',
  templateUrl: 'contacts.component.html',
  styleUrls: ['contacts.component.css'],
})
export class ContactsComponent {
  constructor(private iconService: IgxIconService) { }
  
  public ngOnInit() {
    // register custom SVG icons
    this.iconService.addSvgIcon("telegram", "assets/1.svg", "filter-icons");
    this.iconService.addSvgIcon("twitter", "assets/2.svg", "filter-icons");
    this.iconService.addSvgIcon("instagram", "assets/3.svg", "filter-icons");
}
}