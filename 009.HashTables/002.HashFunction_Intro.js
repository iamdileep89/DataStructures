/*
THE HASH PART

To implement a hash table, we will be using an array
In order to look up values by key, we need a way to convert keys into valid array indices
A function that performs this task is called HASH function

*/


/*
WHAT MAKES A GOOD HASH ?

Fast ie., constant time
Doesnt cluster outputs at specific indices, but distributes uniformly
Deterministic - ie., same input yields same output
  
*/


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