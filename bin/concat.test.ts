import test from 'ava'

import concat from './concat'

let tick : number = 0

test('rxjs : concat', t => 
    concat().subscribe(e => {

        t.is(typeof e, 'number')

        tick === 0 && t.is(e, 1)
        tick === 1 && t.is(e, 2)
        tick === 2 && t.is(e, 3)
        tick === 3 && t.is(e, 4)
        tick === 4 && t.is(e, 5)
        tick === 5 && t.is(e, 6)

        tick++

    }))