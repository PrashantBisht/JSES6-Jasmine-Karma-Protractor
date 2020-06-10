import { AppPage } from './app.po';
import { browser, logging, element, by, ElementArrayFinder } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  /*it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('jstraining-app app is running!');
  });*/

  it('should display login works! on default route', () => {
    browser.get('/');
    expect(page.getTitleText()).toEqual('login works!');

  });

  /*it('should show error when proper credentials are not entered entered' , () => {
    // expect(page.getSubmitButton().getText()).toEqual('Login');
    page.getUserName().sendKeys('admin1');
    page.getPassword().sendKeys('admin');
    page.getSubmitButton().click();
    expect(page.getLoginErrorText()).toEqual('Incorrect Username or Password');
  });*/

  it('should submit when proper credentials are entered' , () => {
    expect(page.getSubmitButton().getText()).toEqual('Login');
    page.getUserName().sendKeys('admin');
    page.getPassword().sendKeys('admin');
    page.getSubmitButton().click();
    expect(page.getLandingPageTitleText()).toEqual('Welcome Admin!');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
