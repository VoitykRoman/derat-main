import { Component, Input } from '@angular/core';
import { Trap } from '../../models/trap.model';
import { Router } from '@angular/router';
import { TrapService } from '../../services/trap.service';
import { AuthenticationService } from 'src/app/main/services/authentication.service';

@Component({
    selector: "app-trap-card",
    templateUrl: "./trap-card.component.html"
})
export class TrapCardComponent {

    @Input() trap: Trap;

    constructor(private router: Router,
        private trapService: TrapService,
        private authenticationService: AuthenticationService) {
    }

    openDetails() {
        this.router.navigate(['menu', 'traps', this.trap.id]);
    }

    delete() {
        this.trapService.deleteTrap(this.trap.id).toPromise().then(e => {
            location.reload();
        })
    }

    isAdmin() {
        return this.authenticationService.currentUserValue.role == 'admin'
    }

    isClient() {
        return this.authenticationService.currentUserValue.role == 'client'
    }

}