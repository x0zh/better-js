import {arrayEqual} from '../src/index'

describe('array test', () => {
  it('arrayEqual()', () => {
    expect(arrayEqual()).toBe(false)
    expect(arrayEqual([1])).toBe(false)
    expect(arrayEqual([1], [1, 2])).toBe(false)
    expect(arrayEqual([1, 2], [1, 2])).toBe(true)
    let array = [1, 2]
    expect(arrayEqual(array, array)).toBe(true)
    expect(arrayEqual([1, 3], [1, 2])).toBe(false)
  })
})
