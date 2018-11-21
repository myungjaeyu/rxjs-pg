import test from 'ava'

import tap from './tap'

test('rxjs : tap', t => 
    tap().subscribe(e => (
        t.is(typeof e, 'string'),
        t.is(e, 'text'))))