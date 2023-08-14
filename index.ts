console.clear();
import { generate } from 'rxjs';

const dotSrc$ = generate(
  2,
  (x) => x <= 38,
  (x) => x + 3,
  (x) => '.'.repeat(x)
);

dotSrc$.subscribe(console.log);
