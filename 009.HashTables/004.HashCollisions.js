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