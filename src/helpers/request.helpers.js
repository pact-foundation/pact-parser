'use strict';

/**
 * Function that makes names of all headers lower case
 * and removes spaces afer commas from header values.
 * 
 * @param headers - header object
 */
function initialHeadersTransform(headers) {
  Object.keys(headers).forEach(function (key) {
    // remove spaces in values after commas
    headers[key] = headers[key].toString().replace(', ', ',');

    // Header names should be in lower case
    // https://nodejs.org/api/http.html#http_message_headers
    headers[key.toLowerCase()] = headers[key];
    if (key !== key.toLowerCase()) {
      delete headers[key];
    }
  });
}

function fieldsContinedInOtherObject(expHeaders, reqHeaders) {
  for (var entry in expHeaders) {
    if (reqHeaders[entry] !== expHeaders[entry]) {
      return false;
    }
  }
  return true;
}


/**
 * This function is used to create GET request
 * query strings from objects created by express
 * middleware.
 * 
 * @param queryParams - query parameters in tring or object presentation
 * @returns string representation of query parametes
 */
function parseQueryParams(queryParams) {
  queryParams = queryParams ? queryParams : {};
  if (typeof (queryParams) == 'object') {
    var str = [];
    for (var p in queryParams)
      if (queryParams.hasOwnProperty(p)) {
        str.push(encodeURIComponent(p) +
          '=' +
          encodeURIComponent(queryParams[p]));
      }
    return str.join('&');
  } else {
    var a = queryParams;
    return a[a.length - 1] !== '&' ? a : a.slice(0, a.length - 1);
  }
}

function parseQueryStringToObject(query) {
  if (!query) { return {}; }
  var temp = query.split('&');
  var result = {};
  for (var i = 0; i < temp.length; i++) {
    var a = temp[i].split('=')
    if (a[1] && !a[2]) {
      result[a[0]] = a[1];
    }
  }
  return result;
}

module.exports = {
  makeHeaderNamesLowerCaseRemoveSpaces: initialHeadersTransform,
  areAllExpectationHeadersPesentInRequest: fieldsContinedInOtherObject,
  parseQueryParams: parseQueryParams,
  getQueryObject: parseQueryStringToObject
};