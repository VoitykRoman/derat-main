import { Component, OnInit } from '@angular/core';
import { IgxIconService } from 'igniteui-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private iconService: IgxIconService) { 
  }
  
  ngOnInit(){
    this.iconService.addSvgIcon("telegram", "assets/1.svg", "filter-icons");
    this.iconService.addSvgIcon("twitter", "assets/2.svg", "filter-icons");
    this.iconService.addSvgIcon("instagram", "assets/3.svg", "filter-icons");
    this.iconService.addSvgIcon("white-twitter", "assets/white-twitter.svg", "filter-icons");
    this.iconService.addSvgIcon("white-telegram", "assets/white-telegram.svg", "filter-icons");
    this.iconService.addSvgIcon("white-instagram", "assets/white-instagram.svg", "filter-icons");
    this.iconService.addSvgIcon("project", "assets/project.svg", "filter-icons");
    this.iconService.addSvgIcon("organization", "assets/organization.svg", "filter-icons");
    this.iconService.addSvgIcon("client", "assets/client.svg", "filter-icons");
    this.iconService.addSvgIcon("media", "assets/media.svg", "filter-icons");
    this.iconService.addSvgIcon("send_email", "assets/send_email.svg", "filter-icons");
    this.iconService.addSvgIcon("callback", "assets/callback.svg", "filter-icons");
    this.iconService.addSvgIcon("feedback", "assets/feedback.svg", "filter-icons");
    this.iconService.addSvgIcon("help", "assets/help.svg", "filter-icons");
  }
}
