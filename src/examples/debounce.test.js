/**
 * Created by alexandros on 08/03/2018.
 */
import { TestScheduler } from 'rxjs/testing';
import { debounceTime } from 'rxjs/operators';
import test from 'ava';

test('It should debounce the integers by 30', t => {
  const valuesMap = {
    a: 2,
    b: 3,
    c: 4,
    d: 5,
  };

  const integersTimeline  = 'a-b-c-----d---';
  const expectedTimeline  = '-------c-----d';

  const testScheduler = new TestScheduler(t.deepEqual.bind(t)); // <= a little trick here

  testScheduler.run(({expectObservable, cold}) => {
    const integers$ = cold(integersTimeline, valuesMap);
    const debouncedIntegers$ = integers$.pipe(debounceTime(3, testScheduler));
    
    expectObservable(debouncedIntegers$).toBe(expectedTimeline, valuesMap);
  });
});
