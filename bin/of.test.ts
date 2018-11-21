import test from 'ava'

import of from './of'

test('rxjs : of', t => 
    of().subscribe(e => (
        t.is(typeof e, 'string'),
        t.is(e, 'text'))))