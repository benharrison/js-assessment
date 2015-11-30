exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
    return fn(arr[0], arr[1], arr[2]);
  },

  speak : function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction : function(str) {
    return function(str2)
    {
      return str + ', ' + str2;
    }
  },

  makeClosures : function(arr, fn) {
    var newarr = new Array();
    
    var makeFn = function(val) {
      return function() { return fn(val); };
    }
    
    for(var i = 0; i < arr.length; i++)
    {
      newarr.push(makeFn(arr[i]));
    }
    
    return newarr;
  },

  partial : function(fn, str1, str2) {
    return function(str3){
      return fn.call(null, str1, str2, str3);
    };
  },

  useArguments : function() {
    var sum = 0;
    if (arguments != null && arguments.length > 0)
    {
      for (var i = 0; i < arguments.length; i++)
        sum += arguments[i];
    }
    
    return sum;
  },

  callIt : function(fn) {
    var args = Array.prototype.slice.call(arguments, 1, arguments.length);
    return fn.apply(null, args);
  },

  partialUsingArguments : function(fn) {
    
  },

  curryIt : function(fn) {

  }
};
