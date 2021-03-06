import { expect } from 'chai'
import c from '../../src/component'
import d from '../../src/diff'


describe.only('Diff', () => {

  describe('replacement', () => {

    it('should replace existing node', () => {
      const oldRoot = c('div', {}, [c('div'), c('div')])
      const newRoot = c('p', {}, [c('div'), c('span')])

      const replace = d(oldRoot, newRoot)
      expect(replace).to.be.an('object')
      expect(replace.tagName).to.equal('p')
      expect(replace.props).to.deep.equal({})
    })

  })

  describe('update', () => {

    it('should update existing node properties', () => {
      const oldRoot = c('div', { name: 'divName' }, [c('div'), c('div')])
      const newRoot = c('p', { name: 'pName' }, [c('div'), c('span')])

      var update = d(oldRoot, newRoot)
      expect(update.props).to.deep.equal({ name: 'pName' })
    })

  })

})
