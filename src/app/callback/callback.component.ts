import { Component, OnInit } from '@angular/core';
import { CallBack } from '../models/callback.model';
import { CallBackService } from '../services/callback.service';
import { ToastService } from '../services/toast.service';

@Component({
    selector: "app-main-callback",
    styleUrls: ["./callback.component.scss"],
    templateUrl: "./callback.component.html"
})
export class CallBackComponent implements OnInit {
    loading = true;
    constructor(private callbackService: CallBackService,
                private toastService: ToastService) {
    }

    ngOnInit() {
        this.loading = false;
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

    showSuccess() {
        this.toastService.show('I am a success toast', { classname: 'bg-success text-light', delay: 10000 });
      }

    public onSubmit() {
        console.log('hello');
        this.callbackService.postCallBack(this.callBack).subscribe(cb => {
            this.showSuccess();
        });
    }
}
