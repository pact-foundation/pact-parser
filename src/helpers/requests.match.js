'use strict';

function RequestsMatchHelper(list, request) {
  var result, i;
  for (i = 0; i < list.length; i++) {
    result = list[i].match(request);
    if (result) return result;
  }
  return result;
}

module.exports = RequestsMatchHelper;