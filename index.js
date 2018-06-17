/*
function theBeatlesPlay(musiciansArray, instrumentArray){
  //Creates an empty array stored in a variable
  var newArray1 = [];
  var newArray2 = [];
  var newArray = [];
  newArray1 = musiciansArray.slice(0);
  newArray2 = instrumentArray.slice(0);
  var arrayLength = musiciansArray.length;
  for (var i =0; i < arrayLength ; ++i){
    var string1 = newArray1[i];
    var string2 = newArray2[i];
    var newString = string1 + " plays " + string2;
    newArray.push(newString);
  }
  return newArray;
}*/

function theBeatlesPlay(musiciansArray, instrumentArray){
  //Creates an empty array stored in a variable
  var newArray = [];
  var arrayLength = musiciansArray.length;
  
  for (var i =0; i < arrayLength ; ++i){
    var string1 = musiciansArray[i];
    var string2 = instrumentArray[i];
    var newString = string1 + " plays " + string2;
    newArray.push(newString);
  }
  return newArray;
}

function johnLennonFacts(factsArray){
  var i = factsArray.length;
  var string2 = "!!!";
  var updateFacts = [];
  
  while (i > 0){
    var string1 = factsArray[i];
    var newString = string1 + string2;
    newFacts.push(newString);
    i++;
  }
  return newFacts;
}

function iLoveTheBeatles(number){
  var NewArray = [];
  var string1 = "I love the Beatles!";
  do{
    NewArray.push(string1);
    number++;
  } while (number < 15);
  return NewArray;
}