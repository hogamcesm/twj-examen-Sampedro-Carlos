import { TwjExamenSampedroCarlosPage } from './app.po';

describe('twj-examen-sampedro-carlos App', () => {
  let page: TwjExamenSampedroCarlosPage;

  beforeEach(() => {
    page = new TwjExamenSampedroCarlosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
