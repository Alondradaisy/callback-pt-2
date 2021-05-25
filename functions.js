const identity = function (value) {
  return value;
};

// \\ // \\ // \\ // \\ //

const indexOf = function (array, target) {
  //array = [1], target = 1
  let result = -1;
  
  each(array, function (item, index) {
    //item = 1
    if (item === target && result === -1) {
      result = index;
      //result = 1
    }
  });
  
  return result;
};

// \\ // \\ // \\ // \\ //

const each = function (collection, iterator) {
  if (collection instanceof Array) {
    for (let i = 0; i < collection.length; i++) {
      iterator(collection[i], i, collection);
    }
  } else if (collection instanceof Object) {
    for (let prop in collection) {
      iterator(collection[prop], prop, collection);
    }
  }
};

// \\ // \\ // \\ // \\ //

const map = function (collection, iterator) {
  var result = [];
  
  each(collection, function (element, index, array) {
    result.push(iterator(element));
  });
  
  return result;
};

// \\ // \\ // \\ // \\ //

const filter = function (collection, callback) {
  let result = [];
  each(collection, function (value) {
    if (callback(value)) {
      result.push(value);
    }
  });
  return result;
};

//error in with parentheses below: 
// const filter = function (collection, callback) {
//   //reject([1, 2, 3, 4, 5, 6], isEven);
//   //callback = isEven
//   let result = [];
  
//   each(collection), function(value) {
//     if(callback(value)) {
//       result.push(value);
//     }
//   };
//   return result;
// };

// \\ // \\ // \\ // \\ //

const reject = function (collection, callbackTest) {
  //this is the two-liner version of solution down below
  return filter(collection, function (value) {
    return !callbackTest(value); //this makes this callbackTest false, meaning the loop is not true (not even), then it returns the array with the pushed the result
  });
}; 

//reject solution:

//   let result = [];

//   each(collection), function(value) {
//     if(!callbackTest(value)) { //this does the opposite of what filter does: this is looking for odd #s
//       result.push(value);
//     }
//   };
// return result;
// };
// \\ // \\ // \\ // \\ // \\ // \\ // \\ // \\ // \\

//* IMPLICIT vs EXPLICIT: () implicit return uses return keyword || {} explicit return where it doesn't actually use 'return' keyword *\\


// IMPLICIT demo \\

// \\ const implicit = thing => (thing)
// undefined
// implicit('hi')
// "hi"

// EXPLICIT demo \\

// \\ const explicit = thing => {thing}
// undefined
// explicit('hi')
// undefined

// \\ // \\ // \\ // \\ // \\ // \\ // \\ // \\ // \\


const uniq = function (array) {
  //array = array of #s
  let result = [];
  
  each(array, function(numbers) {
    //numbers = # elements in array
    result.push(numbers);  // if the index is = to the target in the array when it passes through the loop, it adds/pushes into the array, if not it returns to the result
  });
  return result;
};

// \\ // \\ // \\ // \\ // \\ // \\ // \\ // \\ //
// //Pak's solution: using indexOf

// const uniq = function (array) {
//   //array = array of #s
//   let result = [];
// each(array, function (element) { //element = 1
//   if(indexOf(result, element) === 1) { //indexOf(result, element) == indexOf([], 1)
//     result.push(element);
//   }
// })
// return result;
// };

// \\ real world situation for this ex: \\ // signing up for a coupon using an email. this algo will check the system to make sure that this email hasn't been used more than once. If it has been used more than once, the system will not allow you to use that same email.
// \\ // \\ // \\ // \\ // \\ // \\ // \\ // \\ //

const reduce = function (collection, callback, accumulator) {
  let initializing = arguments.length === 2;
  each(collection, function (value) {
    if (initializing) {
      accumulator = value;
      initializing = false;
    } else {
      accumulator = iterator(accumulator, value);
    }
  });
  return accumulator;
};

//\\

// let accumulate = accumulator;
// each(collection, function(item){
//   accumulate = callback(accumulate, item);
// });
// return accumulate;


//when using reduce, we are starting with the index of the array, unless otherwise stated below. first value is starting value + mixed value. to loop through, you will update the startingValue + mixed value, that becomes the new startingValue

module.exports = {
  filter,
  reject,
  uniq,
  reduce,
  map,
};
