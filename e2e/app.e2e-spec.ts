import { RecipesAppPage } from './app.po';

describe('recipes-app App', () => {
  let page: RecipesAppPage;

  beforeEach(() => {
    page = new RecipesAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
