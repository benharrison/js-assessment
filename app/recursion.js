exports = (typeof window === 'undefined') ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    var findFiles = function(fileArray, directory, dirName, dirNameChild)
    {
      if (dirNameChild === undefined)
        if (dirName === directory.dir)
          dirNameChild = true;

      for (var i = 0; i < directory.files.length; i++)
      {
        if (typeof directory.files[i] === 'string')
          if (dirName === undefined || dirName === directory.dir || dirNameChild)
            fileArray.push(directory.files[i]);

        if (typeof directory.files[i] === 'object')
          findFiles(fileArray, directory.files[i], dirName, dirNameChild);
      }
    }

    var fileArray = [];
    findFiles(fileArray, data, dirName);
    return fileArray;
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
