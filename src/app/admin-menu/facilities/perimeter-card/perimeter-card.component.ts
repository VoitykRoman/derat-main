import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Perimeter } from '../../models/perimeter.model';
import { Router, ActivatedRoute } from '@angular/router';
import { PerimeterService } from '../../services/perimeters.service';
import { AuthenticationService } from 'src/app/main/services/authentication.service';

@Component({
    selector: "app-petimeter-card",
    templateUrl: "./perimeter-card.component.html"
})
export class PerimeterCardComponent {
    @Input() perimeter: Perimeter;
    @Output() onDelete = new EventEmitter<any>()
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
            
        })
        this.onDelete.emit();
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
