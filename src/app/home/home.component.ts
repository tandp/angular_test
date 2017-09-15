import {
  Component,
  OnInit
} from '@angular/core';

import { Http } from '@angular/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

function getWindow(): any {
  return window;
}

@Component({
  selector: 'home',  // <home></home>
  styleUrls: [ './home.component.css' ],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  public title: string;
  public description: string;

  public result:number = 0;
  public questions:any = {};
  public results:any = {};
  public completion:string;
  private _show_intro = true;
  private _show_question = false;
  private _show_result = false;
  private bg1:string;
  private bg2:string;
  private bg3:string;
  private slug:string;
  public routesBase:string;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  public ngOnInit() {
    var data = getWindow().testData;
    this.questions = data['questions'];
    this.results = data['results'];
    this.title = data['test']['title'];
    this.description = data['test']['description'];
    this.bg1 = data['test']['bg1'];
    this.bg2 = data['test']['bg2'];
    this.bg3 = data['test']['bg3'];
    this.completion = data['test']['completion'];
    this.slug = data['test']['slug'];
    if (this.route.snapshot.paramMap.get('result')) {
      this.processResult([data['test']['score']])
    } else {
      this.restartTest(true);
    }
    this.routesBase = getWindow().baseUrl;
    if (!this.routesBase) this.routesBase = ''
  }

  showQuestions(show: boolean) {
    this.showIntro = false;
    this.showQuestion = true;
    this.showResult = false;
    if (this.bg2) {
      document.body.style.backgroundImage = "url('" + this.bg2 + "')";
    }
  }

  restartTest(show: boolean) {
    this.showIntro = true;
    this.showQuestion = false;
    this.showResult = false;
    document.body.className += ' ' + this.slug;
    if (this.bg1) {
      document.body.style.backgroundImage = "url('" + this.bg1 + "')";
    }
    if (this.routesBase) {
      this.router.navigate([this.routesBase + '/']);
    }
  }

  processResult(result: any) {
    this.result = result.reduce((s, i) => { return s + i });

    this.showIntro = false;
    this.showQuestion = false;
    this.showResult = true;
    if (this.bg3) {
      document.body.style.backgroundImage = "url('" + this.bg3 + "')";
    }
  }

  restart(restart: boolean) {
    this.showIntro = true;
    this.showQuestion = false;
    this.showResult = false;
  }

  get showIntro() {
    return this._show_intro;
  }

  set showIntro(show) {
    this._show_intro = show;
  }

  get showQuestion() {
    return this._show_question;
  }

  set showQuestion(show) {
    this._show_question = show;
  }

  get showResult() {
    return this._show_result;
  }

  set showResult(show) {
    this._show_result = show;
  }
}
