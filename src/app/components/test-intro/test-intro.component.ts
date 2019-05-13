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

  public ngOnInit() {
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/ru_RU/sdk.js#xfbml=1&version=v3.0";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', '159050454558546'));

    document.getElementById('vk_share_button').innerHTML = VK.Share.button(false, {
      type: "round",
      text: "Поделиться"
    })
  }

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
