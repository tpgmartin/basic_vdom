import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import c from '../src/component'
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

  describe('render', () => {

    it('should return new DOM element', () => {
      sinon.stub(document.prototype, 'createElement')
      const component = c('div')
      const element = component.render()
      sinon.spy(c.prototype, 'render');
      expect(element).to.be.an('object')
      expect(c.prototype.render).to.have.been.calledOnce
      expect(element).to.be.an.instanceof('Element');
    })

  })

})
