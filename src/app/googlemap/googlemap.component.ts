import { Component } from '@angular/core';


@Component({
    selector: 'app-main-googlemap',
    templateUrl: './googlemap.component.html',
    styleUrls: ['./googlemap.component.css']
})

export class GoogleMapComponent {
    public map: any = { lat: 51.678418, lng: 7.809007 }
}

