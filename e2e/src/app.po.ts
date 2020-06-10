import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-login p')).getText() as Promise<string>;
  }

  getSubmitButton(){
    return element(by.css('app-login button'));
  }

  getUserName(){
    return element(by.id('uname'));
  }

  getPassword() {
    return element(by.id('psw'));
  }

  getLandingPageTitleText() {
    return element(by.css('app-landing-page h1')).getText() as Promise<string>;
  }

  getLoginErrorText() {
    return element(by.id('error')).getText() as Promise<string>;
  }
}
