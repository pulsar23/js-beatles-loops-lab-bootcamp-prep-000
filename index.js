function theBeatlesPlay(musiciansArray, instrumentArray){
  //Creates an empty array stored in a variable
  var newArray1 = [];
  var newArray2 = [];
  var newString = [];
  newArray1 = musiciansArray.slice(0);
  newArray2 = instrumentsArray.slice(0);
  for (var i =0; i < musiciansArray.lenth; ++i){
    var string1 = newArray1[i];
    var string2 = newArray2[i];
    newString[i] = "${string1} plays ${string2}";
    newArray.push(NewString[i]);
  }
  return newArray;
}

function johnLennonFacts(factsArray){
  var i = 0;
  var newFacts = [];
  var newString = [];
  newFacts = factsArray.slice(0);
  while (factsArray.length > 0){
    string1 = factsArray[i];
    string2 = "!!!";
    newString[i] = "${string1} ${string2}";
    newFacts.push(newString[i]);
    i++;
  }
  return newFacts;
}

function iLoveTheBeatles(number){
  var NewArray = [];
  do{
    NewArray.push("I love the Beatles!");
    number++;
  } while (number < 15);
  return NewArray;
}