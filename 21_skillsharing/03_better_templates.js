function instantiateTemplate(name, values) {
  function instantiateText(text) {
    return text.replace(/\{\{(\w+)\}\}/g, function(_, name) {
      return values[name];
    });
  }
  function instantiate(node) {
    if (node.nodeType == document.ELEMENT_NODE) {
      var copy = node.cloneNode();
      for (var i = 0; i < node.childNodes.length; i++) {
        var child = node.childNodes[i];
        copy.appendChild(instantiate(child));

        var repeatContainer = child.getAttribute('template-repeat');
        if (repeatContainer) {
          for (var repeatElement of values[repeatContainer]) {
            copy.appendChild(instantiate(child, repeatElement));
          }
        }
			}
      return copy;
    } else if (node.nodeType == document.TEXT_NODE) {
      return document.createTextNode(
               instantiateText(node.nodeValue));
    } else {
      return node;
    }
  }

  var template = document.querySelector("#template ." + name);
  return instantiate(template);
}

function test(template, values, expected) {
  var testTemplate = document.createElement("div");
  testTemplate.innerHTML = template;
  var result = instantiateTemplate(testTemplate, values).innerHTML;
  if (result != expected)
    console.log("Unexpected instantiation. Expected\n  " + expected + "\ngot\n  " + result);
}

test('<h1 template-when="header">{{header}}</h1>',
     {header: "One"},
     '<h1 template-when="header">One</h1>');

test('<h1 template-when="header">{{header}}</h1>',
     {header: false},
     '');

test('<p><img src="icon.png" template-unless="noicon">Hello</p>',
     {noicon: true},
     '<p>Hello</p>');

test('<ol><li template-repeat="items">{{name}}: {{score}}</li></ol>',
     {items: [{name: "Alice", score: "10"}, {name: "Bob", score: "7"}]},
     '<ol><li template-repeat="items">Alice: 10</li><li template-repeat="items">Bob: 7</li></ol>');
