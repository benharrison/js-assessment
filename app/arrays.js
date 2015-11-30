exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    for (var i = 0; i < arr.length; i++)
    {
      if (arr[i] == item)
        return i;
    }
    
    return -1;
  },

  sum : function(arr) {
    var s = 0;
    for (var i = 0; i < arr.length; i++)
      s += arr[i];
    return s;
  },

  remove : function(arr, item) {
    var index = arr.indexOf(item);
    while(index > -1)
    {
      arr.splice(index, 1);
      index = arr.indexOf(item);
    }
    return arr;
  },

  removeWithoutCopy : function(arr, item) {
    var index = arr.indexOf(item);
    while(index > -1)
    {
      arr.splice(index, 1);
      index = arr.indexOf(item);
    }
    return arr;
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
    
    // var newarr = new Array();
    // newarr.push(item);
    // for(var i = 0; i < arr.length; i++)
    //  newarr.push(arr[i]);
    // return newarr;
  },

  curtail : function(arr) {
    var newarr = new Array();
    for (var i = 1; i < arr.length; i++)
      newarr.push(arr[i]);
    return newarr;
  },

  concat : function(arr1, arr2) {
    var arr3 = arr1.concat(arr2);
    return arr3;
  },

  insert : function(arr, item, index) {
    var newarr = new Array();
    for (var i = 0; i < arr.length; i++)
    {
      if (i == index) newarr.push(item);
      
      newarr.push(arr[i]);
    }
    return newarr;
  },

  count : function(arr, item) {
    var c = 0;
    arr.forEach(function(element, index, arr){
      if (element == item) c++;
    });
    return c;
  },

  duplicates : function(arr) {
    var dups = new Array();
    
    for (var i = 0; i < arr.length; i++)
    {
      if (i === (arr.length - 1)) continue;
      for (var j = i + 1; j < arr.length; j++)
      {
        var isDup = arr[i] === arr[j];
        if (isDup && dups.indexOf(arr[i]) === -1)
          dups.push(arr[i]);
      }
    }

    return dups;
  },

  square : function(arr) {
    for(var i = 0; i < arr.length; i++)
    {
      arr[i] = arr[i] * arr[i];
    }
    return arr;
  },

  findAllOccurrences : function(arr, target) {
    var indexes = new Array();
    for(var i = 0; i < arr.length; i++)
    {
      if (arr[i] === target)
        indexes.push(i);
    }
    return indexes;
  }
};
