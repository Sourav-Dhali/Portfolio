import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'portfolio';
  active = false
  ngOnInit(){
    setTimeout(() => {
      this.active = true
    }, 1000);
  }

  changedURL() {
    this.active = false
    setTimeout(() => {
      this.active = true
    }, 1000);
  }
  
}
