import { of, Observable } from 'rxjs'
import { concat } from 'rxjs/operators'

export default () : Observable<number | object> => of(1, 2, 3)
                    .pipe(
                        concat(of(4, 5, 6)))