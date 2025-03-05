import { randomDate } from '../src/RandomDate';

describe('RandomDate', () => {
  it('GoToHistory', () => {
    console.log(randomDate(1));
    console.log(randomDate(5).toISO());
  });
});
