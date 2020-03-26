import { vuexfireMutations } from '../src'
import {
  VUEXFIRE_SET_VALUE,
  VUEXFIRE_ARRAY_ADD,
  VUEXFIRE_ARRAY_REMOVE,
} from '../src/mutations-types'
// import { db, tick, Vue } from '@posva/vuefire-test-helpers'

describe('mutations', () => {
  it('sets a value', () => {
    const state = { foo: null }
    vuexfireMutations[VUEXFIRE_SET_VALUE](state, {
      path: 'foo',
      target: state,
      data: 'foo',
    })
    expect(state.foo).toBe('foo')
  })

  it('sets a value with a path', () => {
    const state = { foo: { a: { b: null } } }
    vuexfireMutations[VUEXFIRE_SET_VALUE](state, {
      path: 'foo.a.b',
      target: state,
      data: 'foo',
    })
    expect(state.foo.a.b).toBe('foo')
  })

  it('adds to arrays', () => {
    const state = { items: [] }
    vuexfireMutations[VUEXFIRE_ARRAY_ADD](state, {
      target: state.items,
      newIndex: 0,
      data: 'foo',
    })
    expect(state.items).toEqual(['foo'])

    vuexfireMutations[VUEXFIRE_ARRAY_ADD](state, {
      target: state.items,
      newIndex: 0,
      data: 'bar',
    })
    expect(state.items).toEqual(['bar', 'foo'])
  })

  it('removes from arrays', () => {
    const state = { items: ['foo', 'bar'] }
    vuexfireMutations[VUEXFIRE_ARRAY_REMOVE](state, {
      target: state.items,
      oldIndex: 0,
    })
    expect(state.items).toEqual(['bar'])

    vuexfireMutations[VUEXFIRE_ARRAY_REMOVE](state, {
      target: state.items,
      oldIndex: 0,
    })
    expect(state.items).toEqual([])
  })
})
