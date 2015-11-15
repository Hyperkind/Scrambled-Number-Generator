module.exports = generator;

function generator (arrayLength) {
  var newArray = [];
  var ranNum = [];
  var ranArray = [];

  if (!arrayLength) {  
    return [];
  } else {
    for(var i = 0; i < arrayLength; i++) {
      newArray.push(i);
    }
    // newArray.sort(function() {
    //   return 0.5 - Math.random();
    // });
    while(newArray.length > 0) {
      // (var j = 0; j < newArray; j++) {
      var splicedNum = Math.floor(Math.random() * newArray.length);
      ranNum.push(newArray.splice(splicedNum, 1)[0]);
    }
  }
  console.log(ranNum);
  return ranNum;
}  


generator(5);