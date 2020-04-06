import { Component, Input, OnInit } from '@angular/core';
import { Trap } from '../models/trap.model';
import { TrapService } from '../services/trap.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/main/services/authentication.service';

@Component({
    selector: "app-traps",
    templateUrl: "./traps.component.html"
})

export class TrapsComponent implements OnInit {

    trap: Trap;
    obs;
    loading = true;
    constructor(private trapService: TrapService,
        private route: ActivatedRoute,
        private router: Router,
        public authenticationService: AuthenticationService) {
        
    }

    ngOnInit() {
        const trapId = +this.route.snapshot.paramMap.get('id');
        this.obs = this.trapService.getTrapById(trapId);
        const trapPromise = this.trapService.getTrapById(trapId).toPromise();
        trapPromise.then((e: Trap) => {
            this.trap = e;
            this.loading = false;
        })
    }
    markAsReviewed() {
        this.trapService.markAsReviewed(this.trap.id).toPromise().then(e => {
            location.reload();
        })
    }

    goToPerimeter() {
        this.router.navigate(['menu', 'perimeters', this.trap.perimeter.id]);
    }

    isAdmin() {
        return this.authenticationService.currentUserValue.role == 'admin'
    }

    isClient() {
        return this.authenticationService.currentUserValue.role == 'client'
    }
}