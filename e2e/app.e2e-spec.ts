import { NgPlayroomPage } from './app.po';

describe('ng-playroom App', function() {
  let page: NgPlayroomPage;

  beforeEach(() => {
    page = new NgPlayroomPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
