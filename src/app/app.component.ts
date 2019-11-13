import { Component } from '@angular/core';

@Component({
  // name of the component
  selector: 'app-root',
  // HTML code
  templateUrl: './app.component.html',
  // styles that only apply to this component
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Todos';
}
