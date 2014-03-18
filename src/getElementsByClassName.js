// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But in stead we're going to implement it from scratch:
var getElementsByClassName = function (className) {

  var result = {};

  function checkForClass(node) {
    node = node || document.body;
    if ( node ) {
      var children = node.childNodes;
      var list = node.classList
      console.log("the list: " + list);
      if ( list ) {
        for ( var i = 0; i < list.length; i++ ) {
          if ( list[i] === className ) {
            Array.prototype.push.call(result, node);
          }    
        }
      }
      if ( children ) {
        for ( var i = 0; i < children.length; i++) {
          checkForClass(children[i]);
        }
      }
    }
  }
  
  checkForClass();  
  
  return result;

};

