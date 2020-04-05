import { Component, OnInit, Input } from '@angular/core';
import { CallBack } from 'src/app/models/callback.model';
import { CallBackService } from 'src/app/services/callback.service';

@Component({
    selector: "app-callback-admin-card",
    templateUrl: "./callback-card.component.html",
    })
export class CallbackAdminCardComponent {
    @Input() callback: CallBack;

    /**
     *
     */
    constructor(private callbackService: CallBackService) {
    }

    delete() {
        this.callbackService.delete(this.callback.id).toPromise().then(e => {

        })
    }
}
