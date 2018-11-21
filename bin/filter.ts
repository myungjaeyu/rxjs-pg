import { from, Observable } from 'rxjs'
import { filter } from 'rxjs/operators'

export default () : Observable<number> => from([1, 2, 3])
                    .pipe(
                        filter((x : number) => x !== 1))