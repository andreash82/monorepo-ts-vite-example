import { greeter } from '../src/index'

describe('Greeter test', () => {
  it('Greeter test', () => {
    expect(greeter).toBeDefined()
    const output = greeter('test')
    expect(output).toMatch('Hallo test')
  })
})
