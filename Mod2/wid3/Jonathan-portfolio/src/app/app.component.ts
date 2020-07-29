import { Component } from '@angular/core';

interface ITile {
  image: string;
  text: string;
  footer: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Joanthan-portfolio';

  tiles: ITile[] = [
    { image: null, text: 'Welcome to my portfolio', footer: 'fewfweijfowjfowejo wejhfioewjf ioewjfioe wf'},
    { image: './assets/Images/prism-upright.png', text: null, footer: 'fewfweijfowjfowejo wejhfioewjf ioewjfioe wf'},
    { image: './assets/Images/globe-no-pins.png', text: null, footer: 'fewfweijfowjfowejo wejhfioewjf ioewjfioe wf'},
    { image: './assets/Images/energy-drink.png', text: null, footer: 'fewfweijfowjfowejo wejhfioewjf ioewjfioe wf'},
    { image: './assets/Images/grenade-in-tact.png', text: null, footer: 'fewfweijfowjfowejo wejhfioewjf ioewjfioe wf'},
    { image: './assets/Images/curled-paper.png', text: null, footer: 'fewfweijfowjfowejo wejhfioewjf ioewjfioe wf'},
  ];
}
