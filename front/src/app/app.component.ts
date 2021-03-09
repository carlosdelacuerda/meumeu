import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private _activatedRoute: ActivatedRoute,
  ) {
    
  }
  

  ngOnInit(): void {
    // let Url = window.location.href;
    // Url = Url.slice(-5);
    // console.log(Url)
    // function hideHeader (url) {
    //   if (url === 'ister' || url === 'login') {
    //     document.querySelector('header').style.display = "none";
    //   } else {
    //    document.querySelector('header').style.display = "block";
    //   }
    // }
    // hideHeader(Url)


    
  }


}
