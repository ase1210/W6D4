function DOMNodeCollection(array) {
  this.array = array;

}

DOMNodeCollection.prototype.empty = function () {
  this.array.forEach(el => {
    el.innerHTML = '';
  });
}

DOMNodeCollection.prototype.html = function (str) {
  if (str) {
    this.array.forEach( el => {
      el.innerHTML = str;
    });
  } else {
    str = str || this.array[0].innerHTML;
    return str;
  }
}

DOMNodeCollection.prototype.append = function (arg) {
  if (arg instanceof HTMLElement) {
    this.array.forEach(el => {
      // let temp = el.innerHTML;
      // el.innerHTML = temp + arg
      el.innerHTML += arg;
    });
  } else if (typeof arg === 'string') {
    this.array.forEach(el => {
      // let temp = el.innerHTML;
      // el.innerHTML = temp + arg
      el.innerHTML += arg;
    });
  }
}

DOMNodeCollection.prototype.attr = function (name, value) {
  if (value) {
    this.array.forEach(el => {
      el.setAttribute(name, value);
    });
  } else {
    return this.array[0].getAttribute(name)
  }
}

DOMNodeCollection.prototype.addClass = function (value) {
  this.attr('class', value);
}

DOMNodeCollection.prototype.removeClass = function (value) {
  if (value) {
    this.array.forEach(el => {
      if (el.getAttribute('class') === value) {
        el.classList.remove(value);
      }
    });
  } else {
    this.array.forEach(el => {
      el.setAttribute('class', '');
    });
  }
}

DOMNodeCollection.prototype.children = function() {
  let juliaChilds = [];
  this.array.forEach( el => {
    juliaChilds = juliaChilds.concat(Array.from(el.children));
  });
  return new DOMNodeCollection(juliaChilds);
}

module.exports = DOMNodeCollection;