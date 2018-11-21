import { from, Observable } from 'rxjs'
import { pairwise } from 'rxjs/operators'

export default () : Observable<object[]> => from([
                                            { v : 1 }, 
                                            { v : 2 }, 
                                            { v : 3 }, 
                                            { v : 4 }, 
                                            { v : 5 }
                                        ]).pipe(
                                            pairwise())