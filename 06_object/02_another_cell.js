function StretchCell(inner, width, height) {
  this.inner = inner;
  this._strethWidth = width;
  this._strethHeight = height;
}

StretchCell.prototype.minWidth = function() {
  var inner = this.inner.minWidth();
  var outer = this._strethWidth;
  var bigger = (inner > outer) ? inner : outer;
  return bigger;
};

StretchCell.prototype.minHeight = function() {
  var inner = this.inner.minHeight();
  var outer = this._strethHeight;
  var bigger = (inner > outer) ? inner : outer;
  return bigger;
};

StretchCell.prototype.draw = function(width, height) {
  innerCellLines = this.inner.draw(width, height);
  //return innerCellLines;

  var horizontalStretched = innerCellLines.map(padWith.bind(null, ' ', width));

  var stretchWidth = horizontalStretched[0].length;
  var emptyLine = padWith(' ', stretchWidth, '');
  var stretched = arrayPad(emptyLine, height, horizontalStretched);

  return stretched;
};

function padWith(char, width, string) {
  var padded = string;

  while (padded.length < width) {
    padded += char;
  }

  return padded;
}

function arrayPad(line, length, array) {
  var padded = array;

  while (padded.length < length) {
    padded.push(line);
  }

  return padded;
}

module.exports = {
  TextCell: TextCell,
  StretchCell: StretchCell,
  padWith: padWith,
  arrayPad: arrayPad
};

// Start code copied from book
function repeat(string, times) {
  var result = '';
  for (var i = 0; i < times; i++) {
    result += string;
  }
  return result;
}

function TextCell(text) {
  this.text = text.split('\n');
}
TextCell.prototype.minWidth = function() {
  return this.text.reduce(function(width, line) {
    return Math.max(width, line.length);
  }, 0);
};
TextCell.prototype.minHeight = function() {
  return this.text.length;
};
TextCell.prototype.draw = function(width, height) {
  var result = [];
  for (var i = 0; i < height; i++) {
    var line = this.text[i] || '';
    result.push(line + repeat(' ', width - line.length));
  }
  return result;
};
// End code copied from book
