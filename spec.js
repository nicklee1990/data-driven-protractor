describe('Protractor Data Driven Demo', () => {
  const input = element(by.model('yourName'));
  const output = input.element(by.xpath('/html/body/div[2]/div[1]/div[2]/div[2]/div/h1'));

  beforeAll(() => {
    browser.get('https://angularjs.org/');
  });

  beforeEach(() => {
    input.clear()
  });

  all(require('./data/greetings.json'), (data, iteration) => {
    it(`Should bind greetings. #${iteration}: ${data.description}`, () => {
      input
        .sendKeys(data.input)
        .then(() => expect(output.getText()).toEqual(data.expectedOutput))
    });
  })
});