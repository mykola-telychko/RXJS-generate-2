console.clear();
import { generate } from 'rxjs';

// https://www.learnrxjs.io/learn-rxjs/operators/creation/generate

const dotSrc$ = generate(
  2,
  (x) => x <= 38,
  (x) => x + 3,
  (x) => '.'.repeat(x)
);

dotSrc$.subscribe(console.log);

function removeCharacters(inputString, numToRemove) {
  if (numToRemove >= 0 && numToRemove <= inputString.length) {
    return inputString.slice(0, -numToRemove);
  } else {
    throw new Error('Invalid number of characters to remove');
  }
}

// reducing the number of characters
const dotSrc_2$ = generate(
  '......................................',
  (x) => x >= 38,
  (x) => x - 3,
  (x) => removeCharacters(x, 3)
);

dotSrc_2$.subscribe(console.log);
