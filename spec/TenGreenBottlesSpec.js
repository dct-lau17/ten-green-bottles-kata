describe('tenGreenBottles', function(){
  var song
  beforeEach(function (){
    song = new TenGreenBottles(10)
  })

  it('returns 10 Green bottles lyrics', function(){
    expect(song.verseThreeOnwardsLyrics(10)).toEqual('Ten green bottles sitting on the wall,\n'+
                                       'Ten green bottles sitting on the wall,\n'+
                                       'And if one green bottle should accidentally fall,\n'+
                                       `There’ll be nine green bottles sitting on the wall.`)
  })
})
