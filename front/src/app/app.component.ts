import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  headerView: boolean;

  constructor(
    private _activatedRoute: ActivatedRoute,
  ) {
    this.headerView = true;
  }
  

  ngOnInit(): void {
    // localStorage.removeItem('token');
    // this._activatedRoute.params.subscribe(params=> {
    //   console.log(params)
    // })

  }





}
