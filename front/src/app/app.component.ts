import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {

  baserUrl: string = 'http://localhost:3000';

  constructor(
    private _activatedRoute: ActivatedRoute,
  ) {
    
  }
  

  ngOnInit(): void {
    
  }





}
