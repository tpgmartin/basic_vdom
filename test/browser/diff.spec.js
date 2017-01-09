import { expect } from 'chai'
import c from '../../src/component'
import d from '../../src/diff'


describe.only('Diff', () => {

  describe('replacement', () => {

    it('should replace existing node', () => {
      const oldRoot = c('div', {}, [c('div'), c('div')])
      const newRoot = c('p', {}, [c('div'), c('span')])

      const update = d(oldRoot,newRoot)
      expect(update).to.be.an('object')
      expect(update.tagName).to.equal('p')
      expect(update.props).to.deep.equal({})
    })

  })

  describe('update', () => {

    it('should update existing node properties', () => {
    })

  })

})
