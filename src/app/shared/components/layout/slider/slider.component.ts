import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent implements OnInit {
  image = 'assets/upload/slider-bg-3.jpg';
  constructor() {}

  ngOnInit(): void {}
}
