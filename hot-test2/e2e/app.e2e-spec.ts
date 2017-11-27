import { HotTest2Page } from './app.po';

describe('hot-test2 App', () => {
  let page: HotTest2Page;

  beforeEach(() => {
    page = new HotTest2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
