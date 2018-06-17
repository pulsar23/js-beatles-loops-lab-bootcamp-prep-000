function theBeatlesPlay(musiciansArray, instrumentArray){
  //Creates an empty array stored in a variable
  var newArray = [];
  for (var i =0; i < musiciansArray.lenth; ++i){
    var string1 = musiciansArray[i];
    var string2 = instrumentsArray[i];
    var newString = "${string1} plays ${string2}";
    newArray.push(NewString);
  }
  return newArray;
}

/*function johnLennonFacts(factsArray){
  var i = 0;
  while (factsArray.length > 0){
    factsArray[i] = factsArray[i] + "!!!";
    i++;
  }
  return factsArray;
}*/

function iLoveTheBeatles(number){
  var NewArray = [];
  do{
    NewArray.push("I love the Beatles!");
    number++;
  } while (number < 15);
  return NewArray;
}