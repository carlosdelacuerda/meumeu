import { Component, OnInit } from '@angular/core';
import { caprice } from 'src/app/interfaces/caprice.interface';
import { CapricesService } from 'src/app/services/caprices.service';

@Component({
  selector: 'app-list-caprices',
  templateUrl: './list-caprices.component.html',
  styleUrls: ['./list-caprices.component.scss']
})
export class ListCapricesComponent implements OnInit {

  arrCarpices: caprice[];

  constructor(
    // private capricesService = CapricesService
  ) { 
    this.arrCarpices = [];
  }

  ngOnInit(): void {
    // this.capricesService.getAllCaprices()
    // .then(response => {
    //   this.arrCarpices = response;
    // }) 
    // .catch(error => {
    //   console.log(error)
    // })
  }

}
