/**
 * Created by alexandros on 08/03/2018.
 */
import {
  TestScheduler,
} from 'rxjs/Rx';

import test from 'ava';

const merge = (a$, b$) => a$.merge(b$);

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

  const a$ = testScheduler.createColdObservable(aMarble, valuesMap);
  const b$ = testScheduler.createColdObservable(bMarble, valuesMap);

  const ab$ = merge(a$, b$);

  testScheduler.expectObservable(ab$).toBe(expectationMarble, valuesMap);
  testScheduler.flush();
});
