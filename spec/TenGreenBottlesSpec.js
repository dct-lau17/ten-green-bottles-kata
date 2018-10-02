describe('tenGreenBottles', function(){
  var song
  beforeEach(function (){
    song = new TenGreenBottles(10)
  })

  it('returns 10 Green bottles lyrics', function(){
    expect(song.sing(10)).toEqual('Ten green bottles sitting on the wall,\n'+
                                       'Ten green bottles sitting on the wall,\n'+
                                       'And if one green bottle should accidentally fall,\n'+
                                       `There’ll be nine green bottles sitting on the wall.`)
  })

  // it('lyrics for 1 bottle', function(){
  //   expect(song.sing(1)).toEqual('One green bottle sitting on the wall,\n'+
  //                                      'One green bottle sitting on the wall,\n'+
  //                                      'And if one green bottle should accidentally fall,\n'+
  //                                      `There’ll be zero green bottles sitting on the wall.`)
  // })
})
