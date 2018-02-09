import {
  Component,
  OnInit,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

@Component({
  selector: 'test-question',  // <test-question></test-question>
  styleUrls: ['./test-question.component.css'],
  templateUrl: './test-question.component.html'
})
export class TestQuestionComponent implements OnInit {
  @Input() title:string;
  @Input() questions:any;
  @Output() finalResults = new EventEmitter<any>();

  private _step:number = 0;
  private _results:any = [];
  private _show_result:boolean = false;
  private _result:string = '';
  private _is_right:boolean = false;

  private _number_answer:number = -1;

  constructor() {}

  public ngOnInit() {
    // Shuffle order of answers
    this.questions.map(question => {question.answers = this.shuffle(question.answers)});
  }

  /**
   * Next question
   */
  nextQuestion():void {
    this._step++;
    this.showResult = false;
    this.result = '';
    this.isRight = false;
    this.numberAnswer = -1;

    // leave this view
    if (this._results.length == this.questions.length) {
      this._step = 0;
      this.finalResults.emit(this._results);
    }
  }

  /**
   * Current step
   * @returns {number}
   */
  get currentStep():number {
    return this._step;
  }

  /**
   * Current question
   * @returns {any}
   */
  get currentQuestion():any {
    return this.questions[this.currentStep];
  }

  /**
   *
   * @param {any} answer
   * @param {number} i
   */
  addAnswer(answer, i) {
    if (this.currentStep in this._results)
      return;


    this._results[this.currentStep] = answer.right;
    this.showResult = true;
    this.result = answer.result;
    this.isRight = answer.right;

    this.numberAnswer = i;
  }

  /**
   * getter for show block with commentary
   * @returns {boolean}
   */
  get showResult():boolean {
    return this._show_result;
  }

  /**
   * setter for show block with commentary
   * @param result
   */
  set showResult(result) {
    this._show_result = result;
  }

  /**
   *
   * @returns {string}
   */
  get result():string {
    return this._result;
  }

  /**
   *
   * @param result
   */
  set result(result) {
    this._result = result;
  }

  /**
   *
   * @returns {boolean}
   */
  get isRight():boolean {
    return this._is_right;
  }

  /**
   *
   * @param is_right
   */
  set isRight(is_right) {
    this._is_right = is_right;
  }

  /**
   *
   * @returns {number}
   */
  get numberAnswer():number {
    return this._number_answer;
  }

  /**
   *
   * @param number_answer
   */
  set numberAnswer(number_answer) {
    this._number_answer = number_answer;
  }

  shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }
}
