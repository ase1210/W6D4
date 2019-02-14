import DOMNodeCollection from '../src/dom_node_collection';

window.$l = $l;

function $l(arg) {
  // console.log(`cool cooL ${arg}`);
  if (typeof arg === "string") {
    if (arg[0] === "<") {

    } else {
      let domCollection = new DOMNodeCollection(Array.from(document.querySelectorAll(arg)))
      return domCollection;
    }
  }
}

$l.prototype.empty = function () {
  
}

$l.prototype.remove = function () {

}

$l.prototype.attr = function () {

}

$l.prototype.addClass = function () {

}

$l.prototype.removeClass = function () {

}

$l.prototype.html = function () {

}

$l.prototype.find = function () {

}

$l.prototype.children = function () {

}

$l.prototype.parent = function () {

}