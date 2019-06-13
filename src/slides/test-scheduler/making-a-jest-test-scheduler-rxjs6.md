# Jest + TestScheduler (RxJS6)

The TestScheduler requires a `deepEqual` assertion.

We provide that during instantiation:

```javascript
import { TestScheduler } from 'rxjs/testing';

it('Wannabe Marble Test', t => {
  const testScheduler = new TestScheduler((actual, expected) => {
    expect(actual).toEqual(expected);
  });
});
```
