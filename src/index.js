exports.min = function min(array) {
  if(!array || !array.length){
    return 0;
  } else {
    return Math.min.apply( Math, array )
  }
};

exports.max = function max(array) {
  if(!array || !array.length){
    return 0;
  } else {
    return Math.max.apply( Math, array )
  }
};

exports.avg = function avg(array) {
  if(!array || !array.length){
    return 0;
  } else {
    let sum =  array.reduce((accumulator, currentValue) => accumulator + currentValue)
    return (sum / 2) / 10;
  }
  
};
