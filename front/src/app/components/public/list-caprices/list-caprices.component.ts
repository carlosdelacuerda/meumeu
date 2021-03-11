import { Component, OnInit, Input } from '@angular/core';
import { caprice } from 'src/app/interfaces/caprice.interface';
import { CapricesService } from 'src/app/services/caprices.service';

@Component({
  selector: 'app-list-caprices',
  templateUrl: './list-caprices.component.html',
  styleUrls: ['./list-caprices.component.scss']
})
export class ListCapricesComponent implements OnInit {

  arrCaprices: caprice[];

  constructor(
    private capriceService: CapricesService
  ) { 
    this.arrCaprices = [];
  }

  ngOnInit(): void {
    this.capriceService.getAllCaprices()
    .then(response => {
      this.arrCaprices = response;
    }) 
    .catch(error => {
      console.log(error)
    })
  }

}
