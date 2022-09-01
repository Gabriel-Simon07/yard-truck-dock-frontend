import { Component } from '@angular/core';
import { InformPlate } from './inform-plate/interfaces/inform-plate';
import { InformPlateService } from './inform-plate/services/inform-plate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'yard-truck-dock-frontend';
}
