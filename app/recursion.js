exports = (typeof window === 'undefined') ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {

  },

  permute: function(arr) {
    var permArr = new Array();
    var usedChars = new Array();
    
    return (function main(){
      for (var i = 0, len = arr.length; i < len; i++)
      {
        var ch = arr.splice(i, 1)[0];
        usedChars.push(ch);
        if (len == 0) {
          permArr.push(usedChars.slice());
        }
        main();
        input.splice(i, 0, ch);
        usedChars.pop();
      }
    })();
  },

  fibonacci: function(n) {

  },

  validParentheses: function(n) {

  }
};
