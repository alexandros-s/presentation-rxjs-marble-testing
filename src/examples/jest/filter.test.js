import { TestScheduler } from 'rxjs/testing';
import { filter } from 'rxjs/operators';

const filterOdds = input$ => input$.pipe(filter(x => x % 2));

describe('filter odd numbers', () => {
    it('It should filter odd numbers', () => {
        const scheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
      
        const valuesMap = {
          a: 2,
          b: 3,
          c: 4,
          d: 5,
        };
      
        const integersTimeline = 'a-b--c--d';
        const expectedTimeline = '--b-----d';
      
        scheduler.run(({ expectObservable, cold }) => {
          const integers$ = cold(integersTimeline, valuesMap);
          const oddIntegers$ = filterOdds(integers$);
      
          expectObservable(oddIntegers$).toBe(expectedTimeline, valuesMap);
        });
    });
});

