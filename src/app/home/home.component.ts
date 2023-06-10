import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  myName = "Sourav Dhali";

  ngOnInit() {
    this.animateMessage(0,0)
  }
  typewriter_display = ''

  messagelist = [
    'Wellcome to my page ',
    'I am Web Designer ',
    'I am a Software Developer '
  ]

  animateMessage(i:any,j:any) {
    if(i>this.messagelist.length-1){
      i=0
    }
    if(j>=this.messagelist[i].length && i<this.messagelist.length) {
      this.typewriter_display = ''
      j=0
      i++
      this.animateMessage(i,j)
    }
    else {
      if(i>=0 && j>=0) {
        setTimeout(() => {
          this.typewriter_display += this.messagelist[i][j]
          this.animateMessage(i,j+1)
        }, 200);
      }else {
        this.typewriter_display = ''
      }
    } 
  }

}
