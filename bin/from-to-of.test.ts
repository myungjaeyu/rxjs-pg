import test from 'ava'

import from_to_of from './from-to-of'

test('rxjs : from-to-of', t => 
    from_to_of().subscribe(e => (
        t.is(typeof e, 'object'),
        t.is(e.length, 3))))