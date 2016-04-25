var search = /(\W|^)'|'(\W|$)/g;
var replace = '$1"$2';

module.exports = {
  search: search,
  replace:replace
};
