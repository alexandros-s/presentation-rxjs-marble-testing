# AVA + TestScheduler
### RxJS6

The **TestScheduler** requires to use the test runner's `deepEqual` assertion. We provide that during instantiation of the test scheduler:

```javascript
import { TestScheduler } from 'rxjs/testing';
import test from 'ava';

test('Wannabe Marble Test', t => {
  const testScheduler = new TestScheduler(t.deepEqual.bind(t));
});
```