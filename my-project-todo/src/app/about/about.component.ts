import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public isAboutUs: boolean;
  public isAboutMe: boolean;
  
  constructor() { }

  ngOnInit(): void {
  }

}
