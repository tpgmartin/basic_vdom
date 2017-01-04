import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import c from '../../src/component'
chai.use(sinonChai)

describe('Component', () => {

  describe('creation', () => {

    it('should return new component', () => {
      const component = c('div')

      expect(component).to.be.an('object')
      expect(component.tagName).to.equal('div')
      expect(component.props).to.deep.equal({})
      expect(component.children).to.deep.equal([])
    })

    it('should handle children components', () => {
      const component = c('div', { name: 'root' }, [
        c('div', { name: 'child' })
      ])

      expect(component).to.be.an('object')
      expect(component.tagName).to.equal('div')
      expect(component.props).to.deep.equal({ name: 'root' })
      expect(component.children[0].tagName).to.equal('div')
      expect(component.children[0].props).to.deep.equal({ name: 'child' })
    })

    it('should create stateless components', () => {
      const component = c('div', {}, [
        c('div', { name: 'child' })
      ])

      expect(component).to.be.an('object')
      expect(component.tagName).to.equal('div')
      expect(component.children[0].tagName).to.equal('div')
      expect(component.children[0].props).to.deep.equal({ name: 'child' })
    })

  })

  describe.only('render', () => {

    it('should return new DOM element', () => {
      const component = c('div')
      const element = component.render()

      expect(element).to.have.deep.property('tagName', 'DIV')
      expect(element).to.have.deep.property('innerHTML', '')

    })

    it('should return new DOM element with attrubutes', () => {
      assert.fail()
    })

    it('should return nested DOM elements', () => {
      const component = c('div', { name: 'root' }, [
        c('div', { name: 'outerChild' }, [
          c('div', { name: 'innerChild' })
        ])
      ])
      const element = component.render()

      expect(element).to.have.deep.property('tagName', 'DIV')
      expect(element).to.have.deep.property('innerHTML', '<div><div></div></div>')
      expect(element).to.have.deep.property('children')
    })

  })

})
