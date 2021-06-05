import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  public num1: number = 0;
  public num2: number = 0;
  public result;

  constructor() {
  }

  ngOnInit(): void {
  }

  Addition() {
    this.result = Number(this.num1) + Number(this.num2);
  }

  Subtraction() {
    this.result = Number(this.num1) - Number(this.num2);
  }

  Multiplication() {
    this.result = Number(this.num1) * Number(this.num2);
  }

  Division() {
    if (this.num1 === 0 || this.num2 ===0) {
      this.result = 'can not calculator';
    } else {
      this.result = Number(this.num1) / Number(this.num2);
    }

  }

}
