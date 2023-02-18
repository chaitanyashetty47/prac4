import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculat';
  public num1:number;
  public num2:number;
  public num3:number;
  public prec:string;
  //numObject = new Number(0);

  add(): void{
    if (this.num1 == null || this.num2 == null){
      alert("Please Enter an Input");
    }
    else{
      this.num3=this.num1 + this.num2;
    }
  }

  subtract(){
    if (this.num1 == null || this.num2 == null){
      alert("Please Enter an Input");
    }
    else{
      this.num3=this.num1 - this.num2;
    }
    
  }

  multi(){
    if (this.num1 == null || this.num2 == null){
      alert("Please Enter an Input");
    }
    else{
      this.num3=this.num1 * this.num2;
    }
  }

  div(){
    if (this.num1 == null || this.num2 == null){
      alert("Please Enter an Input");
    }
    else{
      this.num3 = this.num1 / this.num2;
      //this.prec = this.numObject.toPrecision(3);
    }
  }

  clear(){
    this.num1 = 0;
    this.num2 = 0;
    this.num3=0;
  }

}
