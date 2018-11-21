import test from 'ava'

import pairwise from './pairwise'

let tick : number = 0

test('rxjs : pairwise', t => 
    pairwise().subscribe(e => {

        t.is(e.constructor, Array)

        let is = (e, a, b) => (t.is(e[0].v, a), t.is(e[1].v, b))

        tick === 0 && is(e, 1, 2)
        tick === 1 && is(e, 2, 3)
        tick === 2 && is(e, 3, 4)
        tick === 3 && is(e, 4, 5)

        tick++

    }))