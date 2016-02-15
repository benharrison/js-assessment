exports = (typeof window === 'undefined') ? global : window;

exports.regexAnswers = {
  containsNumber : function(str) {
    return /\d/.test(str);
  },

  containsRepeatingLetter : function(str) {
    return /([A-Za-z])\1+/.test(str);
  },

  endsWithVowel : function(str) {
    return /a$|e$|i$|o$|u$/i.test(str);
  },

  captureThreeNumbers : function(str) {
    var result = /[0-9]{3}/.exec(str);

    if (result === null)
      return false;

    return result[0];
  },

  matchesPattern : function(str) {
    return /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/.test(str);
  },
  isUSD : function(str) {
    return /^\$\d+(,\d{3})*(\.[0-9][0-9])?$/.test(str);
  }
};
