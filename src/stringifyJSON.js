// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {

  var result = "";

  if ( Object.prototype.toString.call(obj) === "[object Object]"){  
    var obSize = Object.keys(obj).length;
    if ( obSize === 0 ) {
      result += "{}";
    } else {
      var i = 1;  //keeps track of which key-value pair is being stringified
      result += "{";
      for ( var key in obj ){
        var theKey = key;
        var theValue = obj[key];

        if ( theKey !== undefined && typeof theKey !== 'function' && theValue !== undefined && typeof theValue !== 'function' ){
          result += stringifyJSON(theKey) + ":" + stringifyJSON(theValue);
          if ( i < obSize ) result += ",";
        }
        i++;  //Needs to be incremented outside of the above if statement to account for non-stringifyable k/v pairs
      }
      result += "}";
    }
  } else if ( Array.isArray(obj) ) {
    result += "[";
    for ( var i = 0; i < obj.length; i++ ) {
      var item = obj[i];
      result += stringifyJSON(item);
      if ( i < obj.length - 1){
          result += ",";
      }
    } 
    result += "]";
  } else if ( typeof obj === "string" ) {
    result += '"' + obj + '"';
  } else if ( typeof obj === "number" ) {
    result += obj;
  } else if ( typeof obj === "boolean") {
    result += obj;
  } else if ( typeof obj === "function") {
    console.log("Can't stringify a function");
  } else if ( obj === null ) {
    result += "null";
  } else if ( obj === undefined ) {
    console.log("Can't stringify undefined value");
  }
  return result;
}