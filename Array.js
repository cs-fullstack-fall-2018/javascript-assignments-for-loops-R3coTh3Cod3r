var myNumberList = [12, 2112, 9000, 1999, 24];

// console.log(myNumberList);

// for (x=0;x<myNumberList;x++){
//     console.log(myNumberList)

// }
// var largestNum=myNumberList[2];
// console.log(myNumberList[2]);


console.log(getMaxOfArray(myNumberList));

function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}

/*
	KEY: Wow! You were *really* close to finding an alternate approach by using Math.max. Good job!

	Other than that though, your code was broken :-P
*/