class Dom {
  el;

  constructor(selector) {
    this.el =
      typeof selector === 'string'
        ? document.querySelector(selector)
        : selector;
  }

  html(html) {
    if (typeof html === 'string') {
      this.el.innerHTML = html;
      return this;
    } else {
      return this.el.outerHTML.trim();
    }
  }

  append(node) {
    if (node instanceof Dom) {
      node = node.el;
    }
    if (Element.prototype.append) {
      this.el.append(node);
    } else {
      this.el.appendChild(node);
    }

    return this;
  }

  on(eventType, callback) {
    this.el.addEventListener(eventType, callback);
  }

  off(eventType, callback) {
    this.el.removeEventListener(eventType, callback);
  }

  clear() {
    this.html('');
    return this;
  }
}

export function dom(selector) {
  return new Dom(selector);
}

dom.create = (tagName, classes = '') => {
  const el = document.createElement(tagName);
  if (classes) {
    el.classList.add(classes);
  }

  return dom(el);
};
