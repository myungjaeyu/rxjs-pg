import test from 'ava'

import from from './from'

let tick : number = 0

test('rxjs : from', t => 
    from().subscribe(e => {

        t.is(typeof e, 'number')

        tick === 0 && t.is(e, 1)
        tick === 1 && t.is(e, 2)
        tick === 2 && t.is(e, 3)

        tick++

    }))