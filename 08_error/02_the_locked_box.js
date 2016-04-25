var box = {
  locked: true,
  unlock: function() { this.locked = false; },
  lock: function() { this.locked = true;  },
  _content: [],
  get content() {
    if (this.locked) throw new Error("Locked!");
    return this._content;
  }
};

function withBoxUnlocked(body) {
  var wasLocked = box.locked;

  box.unlock();
  try {
    body();
  } catch (e) {
    // do nothing
    null;
  }

  if (wasLocked) {
    box.lock();
  }

}

module.exports = {
  withBoxUnlocked: withBoxUnlocked
};
