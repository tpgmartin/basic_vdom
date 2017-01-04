export default function Component(tagName, props = {}, children = []) {

  if (!(this instanceof Component)) {
    return new Component(tagName, props, children)
  }

  this.tagName = tagName
  this.props = props
  this.children = children

}

Component.prototype.render = function () {
  return document.createElement(this.tagName)
}
