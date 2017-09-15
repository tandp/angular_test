import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./app.component.css'],
  template: `<router-outlet></router-outlet>`
})
export class AppComponent implements OnInit {
  constructor() {}
  public ngOnInit() {}
}
