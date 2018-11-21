import test from 'ava'

import { sum } from '../bin/common'

test('sum', t => {
    t.is(sum(1, 1), 2)
    t.is(sum(2, 1), 3)
})