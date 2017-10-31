import { SubmoduleExamplePage } from './app.po';

describe('submodule-example App', () => {
  let page: SubmoduleExamplePage;

  beforeEach(() => {
    page = new SubmoduleExamplePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
