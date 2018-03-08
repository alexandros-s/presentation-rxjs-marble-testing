/**
 * Created by alexandros on 08/03/2018.
 */
import {
  TestScheduler,
} from 'rxjs/Rx';

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

const integers$ = testScheduler.createColdObservable(integersTimeline, valuesMap);
const debouncedIntegers$ = integers$.debounceTime(30, testScheduler);

testScheduler.expectObservable(debouncedIntegers$).toBe(expectedTimeline, valuesMap);
testScheduler.flush();
});
