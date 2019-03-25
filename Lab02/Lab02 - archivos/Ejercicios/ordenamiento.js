(function () {

  var quick_Sort = function(origArray) {
    if (origArray.length <= 1) {
  		return origArray;
  	} else {
  		var left = [];
  		var right = [];
  		var newArray = [];
  		var pivot = origArray.pop();
  		var length = origArray.length;

  		for (var i = 0; i < length; i++) {
  			if (origArray[i] <= pivot) {
  				left.push(origArray[i]);
  			} else {
  				right.push(origArray[i]);
  			}
  		}

  		return newArray.concat(quick_Sort(left),
      pivot, quick_Sort(right));
  	}
  }

  var myArray = [10, 11, 9 , 99, 1, 6];
  console.log("Cadena Original: " + myArray);
  var sortedArray = quick_Sort(myArray);
  console.log("Cadena ordenada: " + sortedArray);

}());
