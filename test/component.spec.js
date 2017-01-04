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

  it('should handle children components', () => {
    const component = c('div', {name: 'root'}, [
      c('div', {name: 'child'})
    ])

    expect(component).to.be.an('object')
    expect(component.tagName).to.equal('div')
    expect(component.props).to.deep.equal({name: 'root'})
    expect(component.children[0].tagName).to.equal('div')
    expect(component.children[0].props).to.deep.equal({name: 'child'})
  })

  it('should create stateless components', () => {
    const component = c('div', {}, [
      c('div', {name: 'child'})
    ])

    expect(component).to.be.an('object')
    expect(component.tagName).to.equal('div')
    expect(component.children[0].tagName).to.equal('div')
    expect(component.children[0].props).to.deep.equal({name: 'child'})
  })
})
