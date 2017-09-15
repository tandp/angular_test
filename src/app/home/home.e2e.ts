import { browser, by, element } from 'protractor';

describe('App', () => {

  beforeEach(() => {
    /**
     * Change hash depending on router LocationStrategy.
     */
    browser.get('/#/home');
  });
});
