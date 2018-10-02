(function(exports){
  function TenGreenBottles(num){
    this.num = num
  }

  TenGreenBottles.prototype.verseThreeFromLastOnwardsLyrics =  function(num){
    return [_firstSecondLinePlural(num), _thirdLine(), _lastLinePlural(num)].join('\n');
  }

  TenGreenBottles.prototype.verseTwoFromLastOnwardsLyrics =  function(num){
    return [_firstSecondLinePlural(num), _thirdLine(), _lastLine(num)].join('\n');
  }

  function _firstSecondLinePlural(num){
    var line = `${numberToWords.toWords(num).capitalize()} green bottles sitting on the wall,`;
    return [line, line].join('\n')
  }

  function _thirdLine(){
    return 'And if one green bottle should accidentally fall,'
  }

  function _lastLinePlural(num){
    return `There’ll be ${numberToWords.toWords(num - 1)} green bottles sitting on the wall.`
  }

  function _lastLine(num){
    return `There’ll be ${numberToWords.toWords(num - 1)} green bottle sitting on the wall.`
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
