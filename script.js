/*
    prototype: its a way to add functions to a class outside its constructor

    Queue
    FIFO

     5 4 3 2 1   ->    cashier   ->    exit
*/

///////////////////////Queue////////////////////////
function Queue () {
    //constructor
    this.arr = []
}
    //function injecting into original constructor
Queue.prototype.add = function(data){
    this.arr.push(data)
}
    //function injecting into original constructor
Queue.prototype.remove = function(){
    let removedItem = this.arr.shift()
    return removedItem
}

let que = new Queue ()

que.add(5)
que.add("hello")
que.add(6)

que.remove()
que.remove()

console.log(que)
///////////////////////Queue////////////////////////