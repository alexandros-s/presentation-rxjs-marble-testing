# TestScheduler Helpers (RxJS6)

The testScheduler object provides helpers for creating cold and hot observables from a marble syntax timeline.

```js
testScheduler.run(({ cold }) => {
  const integers$ = cold(
    '--a---b--c--d---|',
    {
        a: 2,
        b: 3,
        c: 4,
        d: 5,
    },
  );
});
```