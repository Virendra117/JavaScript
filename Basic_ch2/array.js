console.log("Array in JavaScript");

let myArr=[1,2,3,4,5,6,7]
// console.log(myArr);
// console.log(myArr[2]);

// Array has Element as string 
let newArr=["Virendra", "Surendra","Shailendra","Devendra","Pushpendra","Jitendra"]
// console.log(newArr[2]); // Shailendra => according to index value
// console.log(myArr.length); // 7 => total number of elements

let numberArray= new Array(1,3,4,5,5)
let fruitArray= new Array("Apple","Grapes","Banana","Gavava","Orange")
// console.log(numberArray[1]);
// console.log(fruitArray[3]);


//***********************Array Method*********************** */

/*


1. Creation and Checking
---------------------------------------------------------------------------------------------
Method	         Description	                    Example
-----------------------------------------------------------------------------------------------
Array.isArray()	 Checks if a variable is an array	Array.isArray([1,2]) // true
Array.of()	     Creates a new array from arguments	Array.of(1, 2, 3)
Array.from()	 Creates a new array from iterable	Array.from('hello') // ['h','e','l','l','o']

2. Adding / Removing Elements
Method	          Description	                 Example
---------------------------------------------------------------
push()	          Add at end	                 arr.push(4)
pop()	          Remove from end	             arr.pop()
unshift()	      Add at start	                 arr.unshift(0)
shift()	          Remove from start	             arr.shift()
splice()	      Add/remove at any position	 arr.splice(1, 2, 'a')
slice()	          Extract a portion	             arr.slice(1, 3)

3. Searching and Filtering
Method	            Description	                        Example
-------------------------------------------------------------------------------
includes()	        Checks if value exists	            arr.includes(3)
indexOf()	        First index of element	            arr.indexOf(3)
lastIndexOf()	    Last index of element	            arr.lastIndexOf(3)
find()	            Finds first matching element	    arr.find(x => x > 5)
findIndex()	        Index of first match	            arr.findIndex(x => x > 5)
filter()	        Returns array of matching elements	arr.filter(x => x > 5)

4. Iterating
Method	                    Description	                Example
------------------------------------------------------------------------------------------
forEach()	                Loops through each element	arr.forEach(x => console.log(x))
map()	                    Transforms each element	    arr.map(x => x * 2)

5. Testing Elements
Method	                    Description	                    Example
-------------------------------------------------------------------------------------------
every()	        All elements pass condition	                arr.every(x => x > 0)
some()	        At least one passes	                        arr.some(x => x > 5)

6. Sorting and Reversing
Method	                    Description	                    Example
--------------------------------------------------------------------------------------------
sort()	        Sorts array (modifies original)	            arr.sort()
reverse()	    Reverses array order	                    arr.reverse()

7. Combining and Joining
Method	                Description	                        Example
--------------------------------------------------------------------------------------------
concat()	    Combines arrays	                            arr.concat([4,5])
join()	        Converts to string	                        arr.join(',')
toString()	    Converts to comma-separated string	        rr.toString()

8. Reduction
Method	                Description	                        Example
--------------------------------------------------------------------------------------------
reduce()	    Reduces to single value	                    arr.reduce((a,b) => a + b, 0)
reduceRight()	Same, but from right	                    arr.reduceRight((a,b) => a - b)

9. Filling and Copying
Method	                Description	                        Example
--------------------------------------------------------------------------------------------
fill()	                Fills array with a value	        arr.fill(0)
copyWithin()	        Copies part to another location	    arr.copyWithin(1, 3, 5)

10. Flat and FlatMap (Nested Arrays)
Method	                Description	                        Example
-------------------------------------------------------------------------------------------------
flat()	                Flattens nested arrays	            [1, [2, [3]]].flat(2)
flatMap()	            Map + Flat one level	            arr.flatMap(x => [x*2])



*/


let concatArray=fruitArray.concat(numberArray)
console.log(concatArray); 







