# TestSchedulers Assertions
### RxJS6

The **TestScheduler** provides an assertion in the format:
```js
testScheduler.run(({ expectObservable }) => {
    expectObservable(streamUnderTest$).toBe(
      '--b-----d',
      {
          a: 2,
          b: 3,
          c: 4,
          d: 5,
      }
    );
});
```