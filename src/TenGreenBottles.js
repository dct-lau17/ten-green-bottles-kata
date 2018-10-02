(function(exports){
  function TenGreenBottles(num){
    this.num = num
  }

  TenGreenBottles.prototype.verseThreeFromLastOnwardsLyrics =  function(num){
    if(num < 3) {
      throw new Error('verse needs to be third from last');
    }

    return [_firstSecondLine(num), _thirdLine(), _lastLine(num)].join('\n');
  }

  TenGreenBottles.prototype.verseTwoFromLastOnwardsLyrics =  function(num){
    return [_firstSecondLine(num), _thirdLine(), _lastLine(num)].join('\n');
  }

  TenGreenBottles.prototype.lastVerse =  function(num){
    return [_firstSecondLine(num), _thirdLine(), _lastLine(num)].join('\n');
  }

  function _firstSecondLine(num){
    var word;
    num == 1 ? word = 'bottle' : word = 'bottles'
    var line = `${numberToWords.toWords(num).capitalize()} green ${word} sitting on the wall,`;
    return [line, line].join('\n')
  }

  function _thirdLine(){
    return 'And if one green bottle should accidentally fall,'
  }

  function _lastLine(num){
    var word;
    num - 1 == 1 ? word = 'bottle' : word = 'bottles'
    return `There’ll be ${numberToWords.toWords(num - 1)} green ${word} sitting on the wall.`
  }

  String.prototype.capitalize = function() {
      return this.charAt(0).toUpperCase() + this.slice(1);
  }

  exports.TenGreenBottles = TenGreenBottles;

})(this)
