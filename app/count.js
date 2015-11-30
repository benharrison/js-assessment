exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers =  {
  count : function (start, end) {
    var timeout;
    function sum() {
      console.log(start++);
      if (start <= end)
        timeout = setTimeout(sum, 100);
    }
    sum();
    
    return {
      cancel: function() {
        if (timeout)
          clearTimeout(timeout);
      }
    };
    
  }
};
