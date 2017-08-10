import { ApartmentListingsPage } from './app.po';

describe('apartment-listings App', () => {
  let page: ApartmentListingsPage;

  beforeEach(() => {
    page = new ApartmentListingsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
