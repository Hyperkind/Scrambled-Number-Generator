module.exports = generator;

function generator (arrayLength) {
  var newArray = [];

  if (!arrayLength) {  
    return [];
  } else {
    for(var i = 0; i < arrayLength; i++) {
      newArray.push(i);
    }
  }
  return newArray;
}