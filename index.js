function theBeatlesPlay(musiciansArray, instrumentArray){
  //Creates an empty array stored in a variable
  var newArray1 = [];
  var newArray2 = [];
  var newArray = [];
  newArray1 = musiciansArray.slice(0);
  newArray2 = instrumentArray.slice(0);
  arrayLength = musiciansArray.length;
  for (var i =0; i < arrayLength ; ++i){
    var string1 = newArray1[i];
    var string2 = newArray2[i];
    var newString = "${string1} plays ${string2}";
    newArray.push(newString);
  }
  return newArray;
}

/*function johnLennonFacts(factsArray){
  var i = 0;
  var newFacts = [];
  var newString = [];
  newFacts = factsArray.slice(0);
  var string2 = "!!!";
  
  while (factsArray.length > 0){
    var string1 = factsArray[i];
    newString[i] = string1 + string2;
    newFacts.push(newString[i]);
    i++;
  }
  return newFacts;
}*/

function iLoveTheBeatles(number){
  var NewArray = [];
  var string1 = "I love the Beatles!";
  do{
    NewArray.push(string1);
    number++;
  } while (number < 15);
  return NewArray;
}