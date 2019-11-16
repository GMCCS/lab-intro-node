class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = [];
  }
  add(item) {
    this.items.push(item);  //add method will add item to the items array
    this.length++;    // then we need to make the length bigger so that we can keep adding more items
  }
  get(pos) {
    if( pos > this.item) {
    throw new Error("OutOfBounds");
    } else if (pos < this.item){
      
    }

  }
  max() {}
  min() {}
  average() {}
  sum() {}
}

module.exports = SortedList;
