import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})




export class AppComponent {
  title = 'dnd-system';

  options = [
    { name: 'Mary', id: '1234' },
    { name: 'Shelley', id: '1234' },
    { name: 'Igor', id: '1234' }
  ];
}
