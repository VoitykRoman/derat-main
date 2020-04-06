import { Component, Input } from '@angular/core';
import { Perimeter } from '../../models/Perimeter.model';
import { Router, ActivatedRoute } from '@angular/router';
import { PerimeterService } from '../../services/perimeters.service';
import { AuthenticationService } from 'src/app/main/services/authentication.service';

@Component({
    selector: "app-petimeter-card",
    templateUrl: "./perimeter-card.component.html"
})
export class PerimeterCardComponent {
    @Input() perimeter: Perimeter;

    constructor(private router: Router,
        private route: ActivatedRoute,
        private perimeterService: PerimeterService,
        private authenticationService: AuthenticationService) {
            
    }

    ifStatus(){
        return this.perimeter.service != 'Deratization'
    }
    deletePerimeter() {
        this.perimeterService.deletePerimeter(this.perimeter.id).toPromise().then(e => {
            location.reload();
        })
    }
    isAdmin(){
        return this.authenticationService.currentUserValue.role == 'admin'
    }

    isClient(){
        return this.authenticationService.currentUserValue.role == 'client'
    }

    openDetails() {
        this.router.navigate(['menu', 'perimeters', this.perimeter.id]);
    }
}
