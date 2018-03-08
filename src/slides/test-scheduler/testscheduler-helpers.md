# TestScheduler Helpers

The testScheduler object provides helpers for creating cold and hot observables from a marble timeline.

```js
const integers$ = testScheduler.createColdObservable(
  '--a---b--c--d---|',
  {
      a: 2,
      b: 3,
      c: 4,
      d: 5,
  });
```