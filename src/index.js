const DOMNodeCollection = require('../src/dom_node_collection');

window.$l = $l;

function $l(arg) {
  // console.log(`cool cooL ${arg}`);
  // debugger
  let domCollection;
  if (arg instanceof HTMLElement) {
    domCollection = new DOMNodeCollection([arg]);
  } else if (typeof arg === 'string') {
    domCollection = new DOMNodeCollection(Array.from(document.querySelectorAll(arg)))
  } else if (arg instanceof NodeList) {
    domCollection = new DOMNodeCollection(Array.from(arg))
  }
  return domCollection;
}
