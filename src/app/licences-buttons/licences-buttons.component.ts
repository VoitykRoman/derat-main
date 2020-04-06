import { Component, OnInit } from "@angular/core";
import { LicenseCard } from '../models/license-card.model';
import { LicenseService } from '../services/license.service';

@Component({
    selector: "app-main-licences-buttons",
    templateUrl: `./licences-buttons.component.html`,
    styleUrls: [`./licences-buttons.component.css`]
})
export class LicensesButtonsComponent implements OnInit {

    licenses: LicenseCard[];
    loading = true;
    constructor(private licenseService: LicenseService) {

    }

    ngOnInit() {
        this.licenseService.getLicenses().toPromise().then((licenses: LicenseCard[]) => {
            this.licenses = licenses;
            this.loading = false;
        })
    }

}
