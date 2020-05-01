import { Component } from '@angular/core';
import { IgxIconService } from "igniteui-angular";
import { TranslateService } from '../services/translate.service';

/**
 * @title Basic divider
 */
@Component({
  selector: 'app-main-contacts',
  templateUrl: 'contacts.component.html',
  styleUrls: ['contacts.component.css'],
})
export class ContactsComponent {
  /**
   *
   */
  constructor(
    public translateService: TranslateService) {

  }
}