import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-trips',
  templateUrl: './filter-trips.component.html',
  styleUrls: ['./filter-trips.component.scss']
})
export class FilterTripsComponent implements OnInit {

  countrySelected: string;

  constructor() {

   }

  ngOnInit(): void {

  }


  filterCountry(country) {
   return country;
  }


}
