exports = (typeof window === 'undefined') ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    return 1 & (num >> (bit - 1));
  },

  base10: function(str) {
    return parseInt(str, 2);
  },

  convertToBinary: function(num) {
    for (var nFlag = 0, nShifted = num, sMask = ""; nFlag < 32;
        nFlag++, sMask += String(nShifted >>> 31), nShifted <<= 1);
    return sMask.substr(-8);
  },

  multiply: function(a, b) {
    return a * b;
  }
};
