Fivejs = {};

Fivejs.five = function(num) {
  try {
    if (typeof num !== 'number') {
      throw "invalid input to FiveJs.five() " + num + ' is not a number.';
    } else {
      var result;
      for (var i = 1; i !== 5; i++){
      result = (num*i/i ) + i - i;
      return result
      }
    }
  } catch (err) {
    console.log('Error: ' + err);
  }
};
