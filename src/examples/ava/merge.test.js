/**
 * Created by alexandros on 08/03/2018.
 */
import { TestScheduler } from 'rxjs/testing';
import { merge } from 'rxjs/operators';
import test from 'ava';

test('It should merge a$ and b$', t => {
  const valuesMap = {
    a: 2,
    b: 3,
    c: 4,
    d: 5,
  };

  const a = '---a---a---a--|';
  const b = '-b---n---n----|';
  const e = '-b-a-n-a-n-a--|';

  const testScheduler = new TestScheduler(t.deepEqual.bind(t)); // <= a little trick here

  testScheduler.run(({ expectObservable, cold }) => {
    const a$ = cold(a, valuesMap);
    const b$ = cold(b, valuesMap);

    const ab$ = a$.pipe(merge(b$));

    expectObservable(ab$).toBe(e, valuesMap);
  });
});
