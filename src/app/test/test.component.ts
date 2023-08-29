import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  txt ?: string;
  constructor() { }

  ngOnInit(): void {  //Executes immediately
    let promise = new Promise((resolve) => {
      this.txt = "Prom is running";
      console.log("Promise is running");
      resolve("Success Call");

    });

    promise.then(value => {
      console.log(value);
    })

  }

  // ngOnInit(): void {  //Executes only with subscribe
  //   let ob = new Observable((observer) => {
  //     console.log("Observable is running");
  //     observer.next("Success");
  //   })
  //   ob.subscribe(value => {
  //     console.log(value);
  //   })
  // }


  // ngOnInit(): void {  // Emit only single value
  //   let promise = new Promise((x) => {
  //     x("Promise");
  //     x("Promise1");
  //     x("Promise2");

  //   })
  //   promise.then(value => {
  //     console.log(value)

  //   })
  // }


  // ngOnInit(): void { //Emits Multiple value
  //   let test = new Observable((x)=>{
  //     x.next("Multiple 1")
  //     x.next("Multiple 2")
  //   })
  //   test.subscribe(value =>{
  //     console.log(value);
  //   })
  // }



}

