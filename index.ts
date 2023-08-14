console.clear();
import { generate, of } from 'rxjs';

// https://www.learnrxjs.io/learn-rxjs/operators/creation/generate

const dotSrc$ = generate(
  2,
  (x) => x <= 38,
  (x) => x + 3,
  (x) => '.'.repeat(x)
);
dotSrc$.subscribe(console.log);

// reducing the number of characters
let str = '......................................';
const dotSrc_2$ = generate(
  str,
  (x) => x.length <= 38,
  (x) => strRemoveChar(x, 3) // (x) => x - 3,
);
dotSrc_2$.subscribe(console.log);

function strRemoveChar(inputString, numToRemove) {
  if (numToRemove >= 0 && numToRemove <= inputString.length) {
    return inputString.slice(0, -numToRemove);
  } else {
    throw new Error('Invalid number of characters to remove');
  }
}
