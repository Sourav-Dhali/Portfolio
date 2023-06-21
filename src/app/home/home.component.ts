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
    "Wellcome to my page ",
    "I'm a Web Designer ",
    "I'm a Software Developer "
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
  hireClick(){
    alert("Im Sourav Dhali I have been working for the last 6months in an automobile company. Now Im started my career in trainee software engineer. My technical skills are C,HTML,CSS/SCSS,JavaScript,Angular,Git,Bootstrap");
  }

}
