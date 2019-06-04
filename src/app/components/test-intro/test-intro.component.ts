import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnInit
} from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

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
  vkShareCount:number = 0;

  constructor(private winRef: WindowRef, private http: Http) {
    this.nativeWindow = winRef.getNativeWindow();
  }

  public ngOnInit():void {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({headers: headers});
    this.http.get(`/sharing/count?url=${this.getHostName()}`, options).
    map(
       (response) => response.json()
    ).
    subscribe(
       (data) => {this.setVkShareCount(data)}
    )
  }

  setVkShareCount(data) {
    if (data) this.vkShareCount = data;
  }

  public ngAfterViewChecked(): void {
    if (typeof this.nativeWindow.FB !== "undefined" && this.nativeWindow.FB !== null) { // Instance of FacebookSDK
      this.nativeWindow.FB.XFBML.parse();
    }
  }

  getVkShareUrl = () => `http://www.vk.com/share.php?url=${this.getHostName()}`;

  public shareVk(): void {
    const url = this.getVkShareUrl();
    const width = 640;
    const height = 320;
    const left = window.screen.width / 2 - width / 2;
    const top = window.screen.height / 2 - height / 2;
    window.open(url, "", `width=${width},height=${height},left=${left},top=${top},location=no,toolbar=no,menubar=no`);
  };

  public getVkShareCount():number  {
    return this.vkShareCount;
  }

  start() {
    this.startTest.emit(true);
  }

  public getHostName():string {
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
