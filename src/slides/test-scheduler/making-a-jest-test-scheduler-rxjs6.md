# Jest + TestScheduler
### RxJS6

The **TestScheduler** requires to use the test runner's `deepEqual` assertion. We provide that during instantiation of the test scheduler:

```javascript
import { TestScheduler } from 'rxjs/testing';

it('Wannabe Marble Test', t => {
  const testScheduler = new TestScheduler((actual, expected) => {
    expect(actual).toEqual(expected);
  });
});
```
