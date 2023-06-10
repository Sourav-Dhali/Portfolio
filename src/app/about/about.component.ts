import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  ngOnInit() {
    console.log('dummy')
    let a = 0;
    let b = 1;
    let num = 35;
    let x;
    for (let i = 1; i < num; i++) {
        x = a + b;
        console.log(x +' ');
        a = b;
        b = x;
      }
  }
}
