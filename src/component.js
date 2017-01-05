export default function Component(tagName, props = {}, children = []) {

  if (!(this instanceof Component)) {
    return new Component(tagName, props, children)
  }

  this.tagName = tagName
  this.props = props
  this.children = children

}

Component.prototype.render = function () {
  const props = this.props
  const children = this.children
  let element = document.createElement(this.tagName)

  if (props) {
    Object.keys(props).map((propName) => {
      element.setAttribute(propName, props[propName])
    })
  }

  if (children) {
    children.map((child) => {
      element.appendChild(child.render())
    })
  }

  return element
}
