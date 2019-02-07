import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})




export class AppComponent {

  
  inputName = "Start typing"
  options = [
    { name: 'Mary', value: 'value1' },
    { name: 'Shelley', value: 'value2' },
    { name: 'Igor', value: 'value3' },
    { name: 'Option4', value: 'value4' },
    { name: 'Option5', value: 'value5' },
    { name: 'option6', value: 'value6' }
  ];
}
