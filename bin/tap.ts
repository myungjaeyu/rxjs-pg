import { of, Observable } from 'rxjs'
import { tap } from 'rxjs/operators'

export default () : Observable<string> => of('text')
                    .pipe(
                        tap(e => console.log('AA', e)),
                        tap(e => console.log('BB', e)))