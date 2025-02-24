import { stringToNumberOrUndefined } from '../src/Parse';

describe('Parse', () => {
  it('stringToNumberOrUndefined', () => {
    console.log(stringToNumberOrUndefined('a'));
    console.log(stringToNumberOrUndefined('2'));
    console.log(stringToNumberOrUndefined(undefined));
  });
});
