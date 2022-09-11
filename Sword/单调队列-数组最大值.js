var MaxQueue = function() {
    this.list = [];
    this.deque = [];
};

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function() {
    if(this.deque.length == 0){
        return -1
    } else {
        return this.deque[0];
    }
};

/** 
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function(value) {
    this.list.push(value);
    while(this.deque.length != 0 && this.deque[this.deque.length-1] < value) {
        this.deque.pop();
    }
    this.deque.push(value);
};

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function() {
    if(this.list.length == 0){
        return -1;
    }
    if(this.list[0] == this.deque[0]){
        this.deque.shift();
    }
    return this.list.shift();
};

/**
 * Your MaxQueue object will be instantiated and called as such:
 * var obj = new MaxQueue()
 * var param_1 = obj.max_value()
 * obj.push_back(value)
 * var param_3 = obj.pop_front()
 */