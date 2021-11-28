import { Component, OnInit } from '@angular/core';
import { AirlineService, Airline } from 'src/app/services/airline.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  airlines:Airline[] = [];

  constructor( private _airlineService: AirlineService ) {

  }

  ngOnInit(): void {
    // First load, save on local storage the airlines, project with no Database.
    if(!localStorage.getItem('airlines')) {
      this.airlines = this._airlineService.getAirlines();
      let airlines  = JSON.stringify(this.airlines);
      localStorage.setItem('airlines', airlines);
    } else {
      let airlines = JSON.parse(this._airlineService.getLocalStorageAirline());
      this.airlines = airlines;
    }
  }

}
