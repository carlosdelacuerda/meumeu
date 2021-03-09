import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TripService } from 'src/app/services/trip.service';
import { trip } from '../../../interfaces/trip.interface'

@Component({
  selector: 'app-form-trip',
  templateUrl: './form-trip.component.html',
  styleUrls: ['./form-trip.component.scss']
})
export class FormTripComponent implements OnInit {

  newTrip: trip;

  constructor(
    private tripService: TripService,
    private router: Router
  ) { 
    this.newTrip = {
    };
  }

  ngOnInit(): void {
    
  }

  eventCountry(country){
    this.newTrip.country = country;
  }


  async onClick() {
    // const response = await this.tripService.insert(this.newTrip);
    // this.router.navigate(['/']);
  }

}
