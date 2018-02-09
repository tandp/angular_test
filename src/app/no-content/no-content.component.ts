import { Component } from '@angular/core';

@Component({
  selector: 'no-content',
  template: `
<header class="tp-page__header tp-header">
  <a href="https://theoryandpractice.ru/" class="tp-logo">
    <img src="assets/img/logo.png" alt="t&amp;p logo" width="73"/>
  </a>
  <a href="http://dutchsciencetalks.com/ru/study-in-holland" class="tp-sticker">
    <img src="assets/img/sticker.png" alt="sticker logo" width="119"/>
  </a>
</header>

<main class="tp-page__main tp-content">
  <h1 class="tp-content__title is--center">Такой страницы нет :(</h1>
</main>
  `
})
export class NoContentComponent {

}
