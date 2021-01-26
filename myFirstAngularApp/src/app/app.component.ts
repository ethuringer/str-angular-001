import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my awesome Angular';
  myHero: Hero = {
    name: "Magneto",
    address: "New York",
    superpower: "magnetic"
  };
}
