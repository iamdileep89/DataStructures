// Simple HASH example
// here hash works only with strings

function hash(key, arrayLen){
    let total = 0;
    for(let char of key){
        let value = char.charCodeAt(0)-96
        total = (total+value) % arrayLen
    }
    return total
}

hash("pink", 10) // 0
hash("orangered", 10) // 7
hash("cyan", 10) // 3


/* REFINING OUR HASH
our current hash problems are:
  It only works with strings - no need to worry abt this
  Not constant time - linear in key lenth
  Could be little more random

*/

// Refined HASH function
function hash(key, arrayLen){
    let total = 0;
    let WIERD_PRIME = 31;
    for(let i= 0; i< Math.min(key.length, 100); i++){
        let char = key[i];
        let value = char.charCodeAt(0) - 96;
        total = ( total * WIERD_PRIME + value) % arrayLen;
    }
    return total;
}

/*
We are limiting the max looping to 100
The Prime number in hash is helpful in spreading out the keys more uniformly
It also helpful if the array that you are putting values into has a prime length
*/



/*
DEALING WITH COLLISIONS

Even with large array, and a great hash function, collisions are inevitable
There are many strategies for dealing with collisions, but will focus on two:
  1. Seperate chaining
  2. Linear Probing
*/


/*
1. Seperate Chaining

With seperate chaining, at each index in our array, we store values using a more sophisticated data structure ie an array or LL
This allows us to store multiple key-value pairs at the same index

2. Linear Probing

With linear probing, when we find a collision, we search through the array to find the next empty slot
Unlike with seperate chaining, this allows us to store a single key-value at each index
*/