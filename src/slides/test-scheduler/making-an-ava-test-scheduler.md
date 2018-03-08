# AVA + TestScheduler

The TestScheduler requires a `deepEqual` assertion.

We provide that during instantiation:
```javascript
import {
  TestScheduler,
} from 'rxjs/Rx';

import test from 'ava';

test('Wannabe Marble Test', t => {
 const testScheduler = new TestScheduler(t.deepEqual.bind(t));
});
```