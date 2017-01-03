import chai, { expect } from 'chai'
import c from '../src/component'

describe('Component', () => {

  it('should return new component', () => {
    const component = c('div')

    expect(component).to.be.an('object')
    expect(component.tagName).to.equal('div')
    expect(component.props).to.deep.equal({})
    expect(component.children).to.deep.equal([])
  })
})
