import { Component, Input } from "@angular/core";
import { MenuReference } from 'src/app/models/menu-reference';
import { Router } from '@angular/router';
import { TranslateService } from 'src/app/services/translate.service';
@Component({
    // tslint:disable-next-line:component-selector
    selector: "app-main-dropdown",
    styleUrls: ["./dropdown.component.scss"],
    templateUrl: "./dropdown.component.html"
})
export class DropDownComponent {
    @Input() public items: MenuReference[];
    @Input() public name: string;
    @Input() isService: boolean;

    /**
     *
     */
    constructor(private router: Router,
        public translateService: TranslateService) {
    }
    redirectToService(order) {
        this.router.navigate(['/services'], {
            queryParams: {
                service: order
            }
        })
    }

    redirectTo(link: string) {
        if(this.router.url.split('?')[0] == '/'){
            document.getElementById(link).scrollIntoView({block: "start", behavior: "smooth"});
        }
        this.router.navigate([''], {
            queryParams: {
                id: link
            }
        });

    }
}
