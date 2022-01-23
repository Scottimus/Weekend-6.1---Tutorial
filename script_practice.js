function.Queue(){
    this.arr = []
}

Queue.prototype.add = function(data){
    this.arr.push(data)
}

Queue.prototype.remove = 