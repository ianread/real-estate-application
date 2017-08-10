import { BrokerageApplicationPage } from './app.po';

describe('brokerage-application App', () => {
  let page: BrokerageApplicationPage;

  beforeEach(() => {
    page = new BrokerageApplicationPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
