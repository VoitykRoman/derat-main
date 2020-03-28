import { Component, Input } from "@angular/core";
import { MenuReference } from 'src/app/models/menu-reference';
@Component({
    // tslint:disable-next-line:component-selector
    selector: "app-main-dropdown",
    styleUrls: ["./dropdown.component.scss"],
    templateUrl: "./dropdown.component.html"
})
export class DropDownComponent {
 @Input() public items: MenuReference[];
 @Input() public name: string;
}
