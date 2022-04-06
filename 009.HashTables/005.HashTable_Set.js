/*
  SET a value in the hash table to the given key
*/

/*
PSEUDOCODE

Accepts a key and value
Hashes the key
Stores the key-value pair in the hash table via seperate chaining
*/


class HashTable {
    constructor(size=53){
        this.keyMap = new Array(size);
    }

    _hash(key){
        let total = 0;
        let WIERD_PRIME = 31;
        for(let i= 0; i< Math.min(key.length, 100); i++){
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = ( total * WIERD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }
    set(key, value){
        let index = this._hash(key);
        if(!this.keyMap[index]){
            this.keyMap[index] = []
        }
        this.keyMap[index].push([key, value])
    }
}

let ht = new HashTable();
    
ht.set("hello", "there");
ht.set("how are", "you?");
