import { Component, OnInit } from '@angular/core';
import { languages } from './enums/enums.languages.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  language: languages
  ngOnInit(){
    this.language = languages.english;
  }
}
