import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnInit
} from '@angular/core';

import {WindowRef} from "../../services/window-ref/window-ref.service";

@Component({
  selector: 'test-intro',  // <test-intro></test-intro>
  styleUrls: [ './test-intro.component.css' ],
  templateUrl: './test-intro.component.html'
})
export class TestIntroComponent implements OnInit {
  nativeWindow: any;

  @Input() title:string;
  @Input() description:string;
  @Input() routesBase:string;
  @Output() startTest = new EventEmitter<boolean>();

  constructor(private winRef: WindowRef) {
    this.nativeWindow = winRef.getNativeWindow();
  }

  public ngOnInit() {}

  start() {
    this.startTest.emit(true);
  }

  private getHostName():string {
    let link = this.nativeWindow.location;
    return link.protocol + '//' + link.host + this.routesBase;
  }

  public share(sn: string): void {
    let share = { //
      "vk": 'http://vk.com/share.php?url=' + this.getHostName(),
      "fb": 'https://www.facebook.com/sharer/sharer.php?u=' + this.getHostName(),
      "tw": 'https://twitter.com/intent/tweet?url=' + this.getHostName(),
    };
    if (typeof share[sn] !== 'undefined') {
      let newWindow = this.nativeWindow.open(share[sn]);
    }
  }
}
