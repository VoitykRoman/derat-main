import { Component } from '@angular/core';
import { CallBack } from '../models/callback.model';
import { CallBackService } from '../services/callback.service';

@Component({
    selector: "app-main-callback",
    styleUrls: ["./callback.component.scss"],
    templateUrl: "./callback.component.html"
})
export class CallBackComponent {

    constructor(private callbackService: CallBackService) {
    }
    public callBack = {
        dateTime: new Date(),
        email: undefined,
        fullName: undefined,
        services: undefined,
        phone: undefined
    };

    public services = [
        { service: "Deratization" },
        { service: "Disinsection" },
        { service: "Deodorization" },
        { service: "Disinfection" }
    ];

    public onDateSelection(value) {
        this.callBack.dateTime.setDate((value as Date).getDate());
    }

    public onTimeSelection(event) {
        this.callBack.dateTime.setTime((event.newValue as Date).getTime());
    }

    public onSubmit() {
        console.log('hello');
        this.callbackService.postCallBack(this.callBack).subscribe(cb => {
        });
    }
}
