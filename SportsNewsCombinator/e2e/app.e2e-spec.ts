import { SportsNewsCombinatorPage } from './app.po';

describe('sports-news-combinator App', function() {
  let page: SportsNewsCombinatorPage;

  beforeEach(() => {
    page = new SportsNewsCombinatorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
