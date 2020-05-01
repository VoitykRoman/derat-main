import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IndexImage } from 'src/app/models/index-image.model';
import { IgxFilterOptions, slideOutRight, slideInLeft } from 'igniteui-angular';
import { Base64Service } from 'src/app/shared/base64.service';
import { useAnimation } from '@angular/animations';
import { LicenseService } from 'src/app/services/license.service';
import { LicenseCard } from 'src/app/models/license-card.model';
import { TranslateService } from 'src/app/services/translate.service';

@Component({
    selector: "app-licenses-list",
    styleUrls: ["./licenses-list.component.scss"],
    templateUrl: "./licenses-list.component.html"
})
export class LicensesListComponent implements OnInit {
    @Output() onCreate = new EventEmitter<any>();
    @Output() onDelete = new EventEmitter<any>();
    newLicense = {
        name: '',
        issuedBy: '',
        imageUrl: '',
        description: '',
        readMoreUrl: ''
    }

    public searchLicense: string;
    public density = "comfortable";
    @Input() licenses: LicenseCard[];
    selectedFile;
    page = 1;
    pageSize = 3;
    constructor(private licenseService: LicenseService,
        private base64Service: Base64Service,
        public translateService: TranslateService ) {
    }


    ngOnInit() {
    }

    createNewLicense() {

        this.licenseService.createNewLicense(this.newLicense).toPromise().then(() => {
            this.onCreate.emit();
        })
    }

    deleteLicense(id: number) {
        this.licenseService.deleteLicense(id).toPromise().then(() => {
            
        })
        this.onDelete.emit(id);
    }

    updateLicense(license: LicenseCard, event) {
        const licenseToUpdate = {
            id: license.id,
            name: license.name,
            issuedBy: license.issuedBy,
            imageUrl: license.imageUrl,
            description: license.description,
            readMoreUrl: license.readMoreUrl
        }

        this.licenseService.updateLicense(licenseToUpdate).toPromise().then(() => {
            event.dialog.close();
        })
    }

    onFileChanged(event, image: IndexImage) {
        this.selectedFile = event.target.files[0];
        let u = URL.createObjectURL(this.selectedFile);
        this.base64Service.toDataURL(u)
            .then(dataUrl => {
                image.imageUrl = <string>dataUrl;
            })
    }

    onNewFileChanged(event) {
        this.selectedFile = event.target.files[0];
        let u = URL.createObjectURL(this.selectedFile);
        this.base64Service.toDataURL(u)
            .then(dataUrl => {
                this.newLicense.imageUrl = <string>dataUrl;
            })
    }

    get filterLicenses() {
        const fo = new IgxFilterOptions();
        fo.key = "title";
        fo.inputValue = this.searchLicense;
        return fo;
    }

    public animationSettingsCustom = {
        closeAnimation: useAnimation(slideOutRight, {
            params: {
                duration: "100ms",
                toPosition: "translateX(25px)"
            }
        }),
        openAnimation: useAnimation(slideInLeft, {
            params: {
                duration: "500ms",
                fromPosition: "translateX(-15px)",
                startOpacity: 0.1
            }
        })
    };
}