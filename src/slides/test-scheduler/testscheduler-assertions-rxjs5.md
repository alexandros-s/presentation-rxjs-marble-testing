# TestSchedulers AVA Assertions (back in RxJS5)

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