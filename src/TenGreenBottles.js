(function(exports){
  function TenGreenBottles(num){
    this.num = num
  }

  TenGreenBottles.prototype.sing = function(num){
    var firstSecondLine = `${numberToWords.toWords(num).capitalize()} green bottles sitting on the wall,\n`
    var thirdLine = 'And if one green bottle should accidentally fall,\n'
    var lastLine = `There’ll be ${numberToWords.toWords(num - 1)} green bottles sitting on the wall.`

    return firstSecondLine + firstSecondLine + thirdLine + lastLine;
  }

  // function _last_verse(num){
  //   var firstSecondLine = `${numberToWords.toWords(num).capitalize()} green bottles sitting on the wall,\n`
  //   var thirdLine = 'And if one green bottle should accidentally fall,\n'
  //   var lastLine = `There’ll be ${numberToWords.toWords(num - 1)} green bottles sitting on the wall.`
  //
  //   return firstSecondLine + firstSecondLine + thirdLine + lastLine;
  // }

  String.prototype.capitalize = function() {
      return this.charAt(0).toUpperCase() + this.slice(1);
  }

  exports.TenGreenBottles = TenGreenBottles;

})(this)
