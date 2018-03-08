# TestSchedulers Assertions

The `testScheduler` provides an assertion in the format:
```js
testScheduler
  .expectObservable(streamUnderTest$)
  .toBe(
    '--b-----d',
    {
        a: 2,
        b: 3,
        c: 4,
        d: 5,
    });
```