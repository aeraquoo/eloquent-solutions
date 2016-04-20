function logFive(sequence) {
  var array = sequenceToArray(sequence);
  var logged = 0;
  for (var i in array) {
    console.log(array[i]);
    logged += 1;
    if (logged === 5) {
      return;
    }
  }
}

function ArraySeq(array) {
  this.inner = array;
}

ArraySeq.prototype.next = function() {
  return this.inner.shift();
};

ArraySeq.prototype.finished = function() {
  if (this.inner.length === 0) {
    return true;
  }

  return false;
};

function RangeSeq(start, end) {
  this.current = start;
  this.end = end;
}

RangeSeq.prototype.next = function() {
  // return current, then increment it
  return this.current++;
};

RangeSeq.prototype.finished = function() {
  if (this.current >= this.end) {
    return true;
  }
  return false;
};

function sequenceToArray(sequence) {
  var array = [];

  while (!sequence.finished()) {
    array.push(sequence.next());
  }

  return array;
}

module.exports = {
  logFive: logFive,
  sequenceToArray: sequenceToArray,
  ArraySeq: ArraySeq,
  RangeSeq: RangeSeq
};
