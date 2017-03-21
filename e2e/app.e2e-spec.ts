import { NgrxwebchatPage } from './app.po';

describe('ngrxwebchat App', () => {
  let page: NgrxwebchatPage;

  beforeEach(() => {
    page = new NgrxwebchatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
