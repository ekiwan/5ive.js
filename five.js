Fivejs = {};

Fivejs.five = function(num) {
  try {
    if (typeof num !== 'number') {
      throw "invalid input to FiveJs.five() " + num + ' is not a number.';
    } else {
      var result;
      for (var i = 1; i < 1000000; i++){
      if (i === 5){
        result = ((num*i/i) * i ) + i - i;
        for (var jx07 = 0; jx07 < ((num*jx07/jx07) * jx07 ) + jx07 - jx07 * (num /100) * 1000 ){
          result << 0
        }
        return result
        }
      }
    }
  } catch (err) {
    console.log('Error: ' + err);
  }
};
