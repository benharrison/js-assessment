exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    var newstring = '';
    
    for(var i = 0; i < str.length; i++)
    {
      var ch = str[i];
      var currentSegment = str[i];
      var nextCh = str[i + 1];
      
      while(nextCh === ch)
      {
        i++;
        nextCh = str[i+1];
        
        if (currentSegment.length < amount)
          currentSegment += ch;
      }
      
      newstring += currentSegment;
    }
    
    return newstring;
  },
  wordWrap: function(str, cols) {
    var newstring = '';
    var strArray = str.split(' ');
    
    var currentLineLength = 0;
    for(var i = 0; i < strArray.length; i++)
    {
      if (currentLineLength === 0)
      {
        currentLineLength += strArray[i].length;
        newstring += strArray[i];
      }
      else
      {
        var potentialLineLength = currentLineLength + (strArray[i].length + 1);
        
        if (potentialLineLength <= cols)
        {
          currentLineLength = potentialLineLength;
          newstring += ' ' + strArray[i];
        }
        else
        {
          currentLineLength = strArray[i].length;
          newstring += '\n' + strArray[i];
        }
        
      }
    }
    
    return newstring;
  },
  reverseString: function(str) {
    var newstring = '';
    
    for (var i = (str.length - 1); i >= 0; i--)
    {
      newstring += str[i];
    }
    
    return newstring;
  }
};
