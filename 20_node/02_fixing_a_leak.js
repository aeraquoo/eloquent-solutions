var path = require("path");

function urlToPath(url) {
  var pathname = require("url").parse(url).pathname;
  pathname = path.normalize(path.join(".", decodeURIComponent(pathname)));
  if (pathname.startsWith("..")) {
      return ".";
  }
  return pathname;
}

module.exports = urlToPath;
