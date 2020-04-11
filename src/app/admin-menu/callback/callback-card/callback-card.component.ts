import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { CallBack } from 'src/app/models/callback.model';
import { CallBackService } from 'src/app/services/callback.service';

@Component({
    selector: "app-callback-admin-card",
    templateUrl: "./callback-card.component.html",
})
export class CallbackAdminCardComponent {
    @Input() callback: CallBack;
@Output() onDelete = new EventEmitter<any>();
    /**
     *
     */
    constructor(private callbackService: CallBackService) {
    }

    delete() {
        this.callbackService.delete(this.callback.id).toPromise().then(e => {
           
        })
        this.onDelete.emit(this.callback.id);
    }
}
