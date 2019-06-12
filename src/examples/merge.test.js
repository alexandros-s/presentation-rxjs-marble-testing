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

  const aMarble             = 'a-b------c---d';
  const bMarble             = '--a-----b--d-c';
  const expectationMarble   = 'a-(ba)--bc-d-(dc)';

  const testScheduler = new TestScheduler(t.deepEqual.bind(t)); // <= a little trick here

  testScheduler.run(({expectObservable, cold}) => {
    const a$ = cold(aMarble, valuesMap);
    const b$ = cold(bMarble, valuesMap);
  
    const ab$ = a$.pipe(merge(b$));
  
    expectObservable(ab$).toBe(expectationMarble, valuesMap);
  });
});
