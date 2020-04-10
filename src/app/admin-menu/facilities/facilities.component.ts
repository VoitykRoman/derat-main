import { Component, OnInit } from '@angular/core';
import { FacilityService } from '../services/facility.service';
import { ActivatedRoute } from '@angular/router';
import { Facility } from '../models/facility.model';
import { Perimeter } from '../models/perimeter.model';
import { AuthenticationService } from 'src/app/main/services/authentication.service';
import { IgxFilterOptions } from 'igniteui-angular';

@Component({
    selector: "app-projects",
    templateUrl: "./facilities.component.html"
})
export class FacilitiesComponent implements OnInit {

    facility: Facility;
    obs;
    loading = true;
    searchPerimeter;
    constructor(private facilityService: FacilityService,
        private route: ActivatedRoute,
        public authenticationService: AuthenticationService) {
        
    }
    ngOnInit() {
        const facilityId = +this.route.snapshot.paramMap.get('id');
        this.obs = this.facilityService.getFacilityById(facilityId, this.authenticationService.currentUserValue.id);
        const facilityPromise = this.facilityService.getFacilityById(facilityId, this.authenticationService.currentUserValue.id).toPromise();
        facilityPromise.then((e: Facility) => {
            this.facility = e;
            this.loading = false;
        })
    }
    isAdmin() {
        return this.authenticationService.currentUserValue.role == 'admin'
    }

    isClient() {
        return this.authenticationService.currentUserValue.role == 'client'
    }

    get filterPerimeters(): IgxFilterOptions {
        const fo = new IgxFilterOptions();
        fo.key = "name";
        fo.inputValue = this.searchPerimeter;
        return fo;
    }
    delete() {
        this.facilityService.deleteFacility(this.facility.id).subscribe(e => {

        })
    }
    page = 1;
    pageSize = 2;
    get perimeters(): Perimeter[] {
        return this.facility.perimeters
            .map((feedback, i) => ({ id: i + 1, ...feedback }))
            .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
    }
}

