import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  //create a variable name animal and type = array of string
  animal: string[] = [];

  sortThisItem: Object[] = [
    {'time':'2036-12-31T08:00:00', 'name':'Bob'},
    {'time':'2036-12-21T012:00:00','name':'John'},
    {'time':'2036-12-21T012:00:00','name':'Amanda'},
    {'time':'2036-12-21T012:30:00','name':'James'}
  ];

 
  ngOnInit() {
    
  }
//create a method call getAnimal that returns array of string
//you can hard code the values
//1. 'monkey' 2. 'dog' 3. 'mice' 4. 'cat' 5. 'whale' 6. 'elephant' 7. 'dolphin'
// store these values and returns an array and display it into view




  /*
   * Create a method call sort1 that sorts animals ascending order. you can use existed package to sort.
  */

  sort1() {
  }

  /*
   * Create a method call sort2 that sorts given string in ascending order for time and decsending order for name. you can use existed package to sort.
  */
  sort2() {
  }

}
