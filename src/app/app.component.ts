import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'managerStudent';
  @ViewChild('slidenav') slidenav:MatSidenav;
  isOpened = false;
  openLeftSide(){
    this.isOpened = !this.isOpened;
    this.slidenav.toggle();
  }
  closeLeftSide(){
    this.isOpened = false;
  }
}
