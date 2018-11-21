import { of, Observable } from 'rxjs'
import { map } from 'rxjs/operators'

export default () : Observable<number[]> => of([1, 2, 3])
                    .pipe(
                        map(x => x))