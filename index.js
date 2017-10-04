function theBeatlesPlay(musicians, instruments){
  var mAndI
  for(var i = 0; i < musicians.length; i++){
    var m = musicians[i]
    var ins = instruments[i]
    mAndI.push(`${m} plays ${ins}`)
  }
  return mAndI
}
function johnLennonFacts(array){
  var i = 0
  while(i < array.length){
    array[i] = array[i] + "!!!"
    i++
  }
  return array
}
