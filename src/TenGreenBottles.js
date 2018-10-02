(function(exports){
  function TenGreenBottles(num){
    if(num < 0) {
        throw new Error('number needs to be greater than 0');
      }
    this.num = num
  }

  TenGreenBottles.prototype.sing = function(){
    var lyrics = []

    for(counter = this.num ; counter > 0; counter--){
      lyrics.push(this.verseLyrics(counter))
    }
    return lyrics.join('\n')
  }

  TenGreenBottles.prototype.verseLyrics =  function(num){
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
    return `There’ll be ${numberToWords.toWords(num - 1)} green ${word} sitting on the wall.\n`
  }

  String.prototype.capitalize = function() {
      return this.charAt(0).toUpperCase() + this.slice(1);
  }

  exports.TenGreenBottles = TenGreenBottles;

})(this)
