import { Component, OnInit } from '@angular/core';
import { CallBackService } from 'src/app/services/callback.service';
import { CallBack } from 'src/app/models/callback.model';
import { AuthenticationService } from 'src/app/main/services/authentication.service';

@Component({
    selector: "app-callback-admin",
    templateUrl: "./callback.component.html",
    styleUrls: ['./callback.component.scss']
})
export class CallbackAdminComponent implements OnInit {
    callbacks: CallBack[];
    obs;
    page = 1;
    pageSize = 3;
    loading = true;
    constructor(private callbackService: CallBackService,
        private authenticationService: AuthenticationService) {
    }
    isAdmin(){
        return this.authenticationService.currentUserValue.role == 'admin'
    }

   
    ngOnInit() {
        this.obs = this.callbackService.getAll();
        this.callbackService.getAll().toPromise().then((e: CallBack[]) => {
            this.callbacks = e;
            this.loading = false;
        })
    }

    get callbackPagination(): CallBack[] {
        return this.callbacks
            .map((feedback, i) => ({ id: i + 1, ...feedback }))
            .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
    }
}