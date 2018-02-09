import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnInit
} from '@angular/core';

import {WindowRef} from "../../services/window-ref/window-ref.service";
import { Http, Headers, RequestOptions } from '@angular/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

function getWindow(): any {
  return window;
}

@Component({
  selector: 'test-result',  // <test-result></test-result>
  styleUrls: [ './test-result.component.css' ],
  templateUrl: './test-result.component.html'
})
export class TestResultComponent implements OnInit {
  nativeWindow: any;

  @Input() title:string;
  @Input() result: number = 0;
  @Input() results: any;
  @Input() completion:string;
  @Input() sharedCompletion:string;
  @Input() slug:string;
  @Input() routesBase:string;
  @Output() restartTest = new EventEmitter<boolean>();
  completionSaved:boolean;

  constructor(
    private winRef: WindowRef,
    private http: Http,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.nativeWindow = winRef.getNativeWindow();
  }

  public ngOnInit() {
    if (!this.route.snapshot.paramMap.get('result')) {
      this.storeResult();
      this.router.navigateByUrl(this.routesBase + '/results/' + this.completion);
      getWindow().testData['test']['score'] = this.result;
    }
  }

  restart() {
    this.restartTest.emit(true);
  }

  private getHostName():string {
    let link = this.nativeWindow.location;
    return link.protocol + '//' + link.host + this.routesBase;
  }

  public share(sn: string): void {
    let share = { //
      "vk": 'http://vk.com/share.php?url=' + this.getHostName() + '/results/' + this.completionForShare(),
      "fb": 'https://www.facebook.com/sharer/sharer.php?u=' + this.getHostName() + '/results/' + this.completionForShare(),
      "tw": 'https://twitter.com/intent/tweet?url=' + this.getHostName() + '/results/' + this.completionForShare(),
    };
    if (typeof share[sn] !== 'undefined') {
      let newWindow = this.nativeWindow.open(share[sn]);
    }
  }

  public currentResult():any {
    let currentResult = this.results.find((e) => { return (e.score_from <= this.result) && (e.score_to >= this.result)  })
    if (currentResult) { return currentResult }
    return {}
  }

  public completionForShare():string {
    if (this.sharedCompletion && !this.nativeWindow.completionSaved) {
      return this.sharedCompletion;
    } else {
      return this.completion;
    }
  }

  private csrfToken():string {
    return document.head.querySelector("[name='csrf-token']").getAttribute('content');
  }

  private storeResult():void {
    let headers = new Headers();
    headers.append('X-CSRF-Token', this.csrfToken());
    headers.append("Content-Type", 'application/json');
    headers.append("Accept", 'application/json, text/javascript, */*; q=0.01');
    headers.append("X-Requested-With", 'XMLHttpRequest');

    this.nativeWindow.completionSaved = true;

    let options = new RequestOptions({headers: headers});
    this.http.post("/questionnaires/" + this.slug + "/completion",
                   { completion_id: this.completion, result: this.result },
                   options
                  ).subscribe();
  }
}
