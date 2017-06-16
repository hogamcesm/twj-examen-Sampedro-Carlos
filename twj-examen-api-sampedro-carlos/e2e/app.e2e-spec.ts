import { TwjExamenApiSampedroCarlosPage } from './app.po';

describe('twj-examen-api-sampedro-carlos App', () => {
  let page: TwjExamenApiSampedroCarlosPage;

  beforeEach(() => {
    page = new TwjExamenApiSampedroCarlosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
