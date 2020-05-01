import {Component} from '@angular/core';
import { TranslateService } from '../services/translate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['footer.component.css']
})
export class FooterComponent {

  /**
   *
   */
  constructor(public translateService: TranslateService,private router: Router) {

  }

  redirectToHome() {
    if (this.router.url.split('?')[0] == '/') {
        document.getElementById('home').scrollIntoView({ block: "start", behavior: "smooth" });
        console.log(this.router.url);
    }
    else {
        this.router.navigate(['']);
    }
  }

    redirectTo(link: string) {
      if(this.router.url.split('?')[0] == '/'){
          document.getElementById(link).scrollIntoView({block: "start", behavior: "smooth"});
      }
      this.router.navigate([''], {
          queryParams: {
              id: link
          }
      });
}
}
