export default function Component(tagName, props = {}, children = []) {

  if (!(this instanceof Component)) {
    return new Component(tagName, props, children)
  }

  this.tagName = tagName
  this.props = props
  this.children = children

}

Component.prototype.render = function () {
  let element = document.createElement(this.tagName)

  if (this.children) {
    this.children.map((child) => {
      element.appendChild(child.render())
    })
  }

  return element
}
