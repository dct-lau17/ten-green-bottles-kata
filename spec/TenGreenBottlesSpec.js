describe('tenGreenBottles', function(){
  var song, verse1, verse2, verse3

  beforeEach(function (){
    song = new TenGreenBottles(3)
  })

  describe('#initialize', function(){
    it('throws error when input is a negative number', function(){
      expect(function() {new TenGreenBottles(-1)}).toThrowError('number needs to be greater than 0');
    })
  })

  describe('#verseLyrics', function(){
    it('returns 10 Green bottles lyrics', function(){
      expect(song.verseLyrics(10)).toEqual('Ten green bottles sitting on the wall,\n'+
                                         'Ten green bottles sitting on the wall,\n'+
                                         'And if one green bottle should accidentally fall,\n'+
                                         `There’ll be nine green bottles sitting on the wall.\n`)
    })

    it('returns second to last verse lyrics', function(){
      expect(song.verseLyrics(2)).toEqual('Two green bottles sitting on the wall,\n'+
                                         'Two green bottles sitting on the wall,\n'+
                                         'And if one green bottle should accidentally fall,\n'+
                                         `There’ll be one green bottle sitting on the wall.\n`)
    })

    it('returns last verse lyrics', function(){
      expect(song.verseLyrics(1)).toEqual('One green bottle sitting on the wall,\n'+
                                         'One green bottle sitting on the wall,\n'+
                                         'And if one green bottle should accidentally fall,\n'+
                                         `There’ll be zero green bottles sitting on the wall.\n`)
    })
  })


  describe('#sing', function(){
    verse1 = 'Three green bottles sitting on the wall,\n'+
             'Three green bottles sitting on the wall,\n'+
             'And if one green bottle should accidentally fall,\n'+
             `There’ll be two green bottles sitting on the wall.\n`
    verse2 = 'Two green bottles sitting on the wall,\n'+
             'Two green bottles sitting on the wall,\n'+
             'And if one green bottle should accidentally fall,\n'+
             `There’ll be one green bottle sitting on the wall.\n`
    verse3 = 'One green bottle sitting on the wall,\n'+
             'One green bottle sitting on the wall,\n'+
             'And if one green bottle should accidentally fall,\n'+
             `There’ll be zero green bottles sitting on the wall.\n`

    var expected_output = [verse1, verse2, verse3].join('\n')

    it('returns the lyrics of the whole song', function(){
      expect(song.sing()).toEqual(expected_output)
    })
  })
})
