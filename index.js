function theBeatlesPlay(musicians, instruments){
  var array
  for(i = 0; i < musicians.length; i++){
    var m = musicians[i]
    var ins = instruments[i]
    array.push(`${m} plays ${ins}`)
  }
  return array
}
function johnLennonFacts(array){
  i = 0
  while(i < array.length){
    array[i] = array[i] + "!!!"
    i++
  }
  return array
}
