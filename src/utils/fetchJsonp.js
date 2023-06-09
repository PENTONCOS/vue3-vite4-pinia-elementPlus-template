var defaultOptions = {
  timeout: 5000,
  jsonpCallback: 'callback',
  jsonpCallbackFunction: null,
};

function generateCallbackFunction() {
  return 'jsonp_' + Date.now() + '_' + Math.ceil(Math.random() * 100000);
}

function clearFunction(functionName) {
  try {
    delete window[functionName];
  } catch (e) {
    window[functionName] = undefined;
  }
}

function removeScript(scriptId) {
  var script = document.getElementById(scriptId);
  if (script) {
    document.getElementsByTagName('head')[0].removeChild(script);
  }
}

function fetchJsonp(_url) {
  var options =
    arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  var url = _url;
  var timeout = options.timeout || defaultOptions.timeout;
  var jsonpCallback = options.jsonpCallback || defaultOptions.jsonpCallback;

  var timeoutId = undefined;

  return new Promise(function (resolve, reject) {
    var callbackFunction =
      options.jsonpCallbackFunction || generateCallbackFunction();
    var scriptId = jsonpCallback + '_' + callbackFunction;

    window[callbackFunction] = function (response) {
      resolve(response);

      if (timeoutId) clearTimeout(timeoutId);

      removeScript(scriptId);

      clearFunction(callbackFunction);
    };

    url += url.indexOf('?') === -1 ? '?' : '&';

    var jsonpScript = document.createElement('script');
    jsonpScript.setAttribute(
      'src',
      '' + url + jsonpCallback + '=' + callbackFunction
    );
    if (options.charset) {
      jsonpScript.setAttribute('charset', options.charset);
    }
    if (options.nonce) {
      jsonpScript.setAttribute('nonce', options.nonce);
    }
    if (options.referrerPolicy) {
      jsonpScript.setAttribute('referrerPolicy', options.referrerPolicy);
    }
    jsonpScript.id = scriptId;
    document.getElementsByTagName('head')[0].appendChild(jsonpScript);

    timeoutId = setTimeout(function () {
      reject(new Error('JSONP request to ' + _url + ' timed out'));

      clearFunction(callbackFunction);
      removeScript(scriptId);
      window[callbackFunction] = function () {
        clearFunction(callbackFunction);
      };
    }, timeout);

    jsonpScript.onerror = function () {
      reject(new Error('JSONP request to ' + _url + ' failed'));

      clearFunction(callbackFunction);
      removeScript(scriptId);

      if (timeoutId) clearTimeout(timeoutId);
    };
  });
}

export default fetchJsonp;
