import test from 'ava'

import filter from './filter'

let tick : number = 0

test('rxjs/operators : filter', t => 
    filter().subscribe(e => {

        t.is(typeof e, 'number')

        tick === 0 && t.is(e, 2)
        tick === 1 && t.is(e, 3)

        tick++

    }))