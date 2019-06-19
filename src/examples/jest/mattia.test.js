import { TestScheduler } from 'rxjs/testing';
import { map } from 'rxjs/operators';

describe('map', () => {
    it('should pass', () => {
       const scheduler = new TestScheduler((actual, expected) => {
           expect(actual).toEqual(expected);
       })

       const input = 'a--b--c-d';
       const output = 'e--f--g-h';
       const inputMap = {
           a: 2,
           b: 3,
           c: 5,
           d: 8
       }
       const outputMap = {
           e: 4,
           f: 6,
           g: 10,
           h: 16
       }

       scheduler.run(({ expectObservable, cold }) => {
           expectObservable(cold(input, inputMap).pipe(map(x => x * 2))).toBe(output, outputMap)
       })
    })
})