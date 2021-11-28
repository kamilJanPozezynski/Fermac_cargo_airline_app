import { Component, OnInit } from '@angular/core';
import { AirlineService } from 'src/app/services/airline.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-airline-form',
  templateUrl: './add-airline-form.component.html',
  styleUrls: ['./add-airline-form.component.css'],
})
export class AddAirlineFormComponent implements OnInit {
  airlinesNames: [] = [];
  countries: [] = [];
  formdata: any;
  airlineName: string = '';
  transportType: string = '';
  DestinationCountry: string = '';
  submitedCorrectly = false;

  constructor(private _airlineService: AirlineService) {}

  ngOnInit(): void {
    this.airlinesNames = this._airlineService.getAirlinesNames();
    this.countries = this._airlineService.getDestinationCountries();
    this.formdata = new FormGroup({
      airlineName: new FormControl('Iberia'),
      transportType: new FormControl('load'),
      DestinationCountry: new FormControl('Afghanistan'),
    });
  }
  onClickSubmit(data: any) {
    this._airlineService.addNewAirline(data);
    this.submitedCorrectly = true
    setTimeout(() => {
      this.submitedCorrectly = false;
    },3000)
  }
}
