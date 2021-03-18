import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { caprice } from 'src/app/interfaces/caprice.interface';
import { CapricesService } from 'src/app/services/caprices.service';

@Component({
  selector: 'app-form-caprice',
  templateUrl: './form-caprice.component.html',
  styleUrls: ['./form-caprice.component.scss']
})
export class FormCapriceComponent implements OnInit {

  newDesire: caprice;

  constructor(
    private capricesService: CapricesService,
    private router: Router
  ) { 
    this.newDesire = {
    };
  }

  ngOnInit(): void {
 
  }

  eventCountry(country){
    this.newDesire.country = country;
  }


  async onSubmit(pForm) {
    console.log(pForm)
    await this.capricesService.create(pForm); 
    }

}
