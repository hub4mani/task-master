import { QualityPage } from './app.po';

describe('quality App', () => {
  let page: QualityPage;

  beforeEach(() => {
    page = new QualityPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
