import test from 'ava'

import map from './map'

test('rxjs/operators : map', t => 
    map().subscribe(e => (
        t.is(typeof e, 'object'),
        t.is(e.length, 3))))