/**
 * Created by alexandros on 08/03/2018.
 */
import { TestScheduler } from 'rxjs/testing';
import { filter } from 'rxjs/operators';

import test from 'ava';

const filterOdds = input$ => input$.pipe(filter(x => x % 2));

test('It should filter odd numbers', t => {
  const valuesMap = {
    a: 2,
    b: 3,
    c: 4,
    d: 5,
  };

  const integersTimeline  = 'a-b--c--d';
  const expectedTimeline  = '--b-----d';

  const testScheduler = new TestScheduler(t.deepEqual.bind(t)); // <= a little trick here

  testScheduler.run(({expectObservable, cold}) => {
    const integers$ = cold(integersTimeline, valuesMap);
    const oddIntegers$ = filterOdds(integers$);
  
    expectObservable(oddIntegers$).toBe(expectedTimeline, valuesMap);
  });
});
