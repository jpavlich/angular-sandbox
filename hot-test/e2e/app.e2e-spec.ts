import { HotTestPage } from './app.po';

describe('hot-test App', () => {
  let page: HotTestPage;

  beforeEach(() => {
    page = new HotTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
