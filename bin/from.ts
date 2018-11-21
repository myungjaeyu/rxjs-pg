import { from, Observable } from 'rxjs'

export default () : Observable<number> => from([1, 2, 3])