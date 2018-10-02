describe('tenGreenBottles', function(){
  var song
  beforeEach(function (){
    song = new TenGreenBottles(10)
  })
  describe('#verseThreeFromLastOnwardsLyrics(10)', function(){
    it('returns 10 Green bottles lyrics', function(){
      expect(song.verseThreeFromLastOnwardsLyrics(10)).toEqual('Ten green bottles sitting on the wall,\n'+
                                         'Ten green bottles sitting on the wall,\n'+
                                         'And if one green bottle should accidentally fall,\n'+
                                         `There’ll be nine green bottles sitting on the wall.`)
    })

    it('throws error when a number less than 3 is passed in', function(){
      expect(function() { song.verseThreeFromLastOnwardsLyrics(1); })
                                .toThrowError('verse needs to be third from last');
    });

  })

  it('returns second to last verse lyrics', function(){
    expect(song.verseTwoFromLastOnwardsLyrics(2)).toEqual('Two green bottles sitting on the wall,\n'+
                                       'Two green bottles sitting on the wall,\n'+
                                       'And if one green bottle should accidentally fall,\n'+
                                       `There’ll be one green bottle sitting on the wall.`)
  })

  it('returns last verse lyrics', function(){
    expect(song.lastVerse(1)).toEqual('One green bottle sitting on the wall,\n'+
                                       'One green bottle sitting on the wall,\n'+
                                       'And if one green bottle should accidentally fall,\n'+
                                       `There’ll be zero green bottles sitting on the wall.`)
  })
})
