import { from, of, Observable } from 'rxjs'
import { toArray, mergeMap } from 'rxjs/operators'

export default () : Observable<number[]> => from([1, 2, 3])
                    .pipe(
                        toArray(),
                        mergeMap(x => of(x)))