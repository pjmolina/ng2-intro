import { Component } from '@angular/core';
import { LoggerService} from './logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [ LoggerService ]
})
export class AppComponent {
  title = 'app works!';

  constructor(private logger: LoggerService) {
  }

  inicializado(fecha) {
    // console.log(fecha);
    this.logger.log(fecha);
  }
}
