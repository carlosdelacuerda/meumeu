import { Component, OnInit, Input } from '@angular/core';
import { trip } from 'src/app/interfaces/trip.interface';
import { TripService } from 'src/app/services/trip.service';

@Component({
  selector: 'app-list-trips',
  templateUrl: './list-trips.component.html',
  styleUrls: ['./list-trips.component.scss']
})
export class ListTripsComponent implements OnInit {

  arrTrips: trip[];


  @Input () countrySelected: string;

  constructor(
    private tripService: TripService,
    ) { 
    this.arrTrips = [];
  }

  ngOnInit(): void {
    this.tripService.getAllTrips()
    .then(response => {
      this.arrTrips = response;
    })
    .catch(error => {
      console.log(error)
    })
  }

  // this.tripService.getByCountry()
  // .then(response => {
  //   this.arrTrips = response;
  // })
  // .catch(error => {
  //   console.log(error)
  // })


}
