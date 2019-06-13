import { TestScheduler } from 'rxjs/testing';
import { merge } from 'rxjs/operators';

describe('merge', () => {
  it('fails', () => {
    const scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });

    const a = '-a-a-a|';
    const b = 'b-n-n-|';
    const e = 'banana|';

    const map = {
      a: 1,
      b: 2,
      n: 3,
    };

    scheduler.run(({ cold, expectObservable }) => {
      const a$ = cold(a, map);
      const b$ = cold(b, map);
      expectObservable(a$.pipe(merge(b$))).toBe(e, map);
    });
  });
});
