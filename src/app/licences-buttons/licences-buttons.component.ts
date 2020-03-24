import { Component } from "@angular/core";
import { LicenseCard } from '../models/license-card.model';

@Component({
    selector: "app-main-licences-buttons",
    templateUrl: `./licences-buttons.component.html`,
    styleUrls: [`./licences-buttons.component.css`]
})
export class LicensesButtonsComponent {

    licenses: LicenseCard[] = [new LicenseCard({
        name: "ISO:9001",
        date: new Date(),
        description: 'The ISO 9000 family of quality management systems (QMS) is a set of standards that helps organizations ensure they meet customers and other stakeholder needs within statutory and regulatory requirements related to a product or service.[1] ISO 9000 deals with the fundamentals of quality management systems,[2] including the seven quality management principles that underlie the family of standards.[2] [3][4] ISO 9001 deals with the requirements that organizations wishing to meet the standard must fulfil.[5]',
        issuedBy: 'Roman',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/46/Purple-throated_carib_hummingbird_feeding.jpg',
        readMoreUrl: 'https://metanit.com/web/angular2/2.7.php'
    }),
    new LicenseCard({
        name: "ISO:1400",
        date: new Date(),
        description: 'ISO 14000 is a family of standards related to environmental management that exists to help organizations (a) minimize how their operations (processes, etc.) negatively affect the environment (i.e. cause adverse changes to air, water, or land); (b) comply with applicable laws, regulations, and other environmentally oriented requirements; and (c) continually improve in the above.[1]',
        issuedBy: 'Taras',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/46/Purple-throated_carib_hummingbird_feeding.jpg',
        readMoreUrl: 'https://en.wikipedia.org/wiki/ISO_14000'
    }),
    new LicenseCard({
        name: "ISO:2701",
        date: new Date(),
        description: 'ISO/IEC 27001 is an information security standard, part of the ISO/IEC 27000 family of standards, of which the last version was published in 2013, with a few minor updates since then.[1] It is published by the International Organization for Standardization (ISO) and the International Electrotechnical Commission (IEC) under the joint ISO and IEC subcommittee, ISO/IEC JTC 1/SC 27.[2]',
        issuedBy: 'Justin',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/46/Purple-throated_carib_hummingbird_feeding.jpg',
        readMoreUrl: 'https://en.wikipedia.org/wiki/ISO/IEC_27001'
    })]


}
