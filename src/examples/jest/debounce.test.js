import { TestScheduler } from 'rxjs/testing';
import { debounceTime } from 'rxjs/operators';

describe('debounce', () => {
    it('It should debounce the integers by 3', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
            expect(actual).toEqual(expected);
        })

        const valuesMap = {
          a: 2,
          b: 3,
          c: 4,
          d: 5,
        };
      
        const integersTimeline  = 'a-b-c-----d---';
        const expectedTimeline  = '7ms (c) 3ms (d)';
            
        testScheduler.run(({expectObservable, cold}) => {
          const integers$ = cold(integersTimeline, valuesMap);
          const debouncedIntegers$ = integers$.pipe(debounceTime(3));
          
          expectObservable(debouncedIntegers$).toBe(expectedTimeline, valuesMap);
        });
      });
});

