import { Component, OnInit } from '@angular/core';
import { ParallaxScrollModule } from 'ng2-parallaxscroll';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  config: ParallaxScrollModule = {
    axis: 'Y',
    speed: -.5
  };

  constructor() { }

  ngOnInit() {
  }

}
