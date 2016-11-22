import { Angular00Page } from './app.po';

describe('angular00 App', function() {
  let page: Angular00Page;

  beforeEach(() => {
    page = new Angular00Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
