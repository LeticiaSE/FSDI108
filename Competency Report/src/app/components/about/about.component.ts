import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  //when the component is created
  constructor(private data: DataService) { }

  //exec when the component is being initialized to be displayed
  ngOnInit(): void {
    console.log("Data service holds: ", this.data.getUsers());

  }

}

/**
 * Angular 2+ Dependency Injection
 *
 * Angular 2+ Lifecycle
 * 
 */
