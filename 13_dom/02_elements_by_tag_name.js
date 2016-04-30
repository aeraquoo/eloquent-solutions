function byTagName(node, tagName) {
  var matches = [];
  function processNode(node) {
    if (node === undefined) return;
    if (node.tagName.toLowerCase() === tagName.toLowerCase()) {
      matches.push(node);
    }
    Array.prototype.forEach.call(node.children, processNode);
  }
  processNode(node);
  return matches;
}

module.exports = byTagName;
