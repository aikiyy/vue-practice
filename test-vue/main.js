Object.defineProperty(Array.prototype, "chunk", {
  value: function (chunkSize) {
    var array = [];
    for (var i = 0; i < this.length; i += chunkSize)
      array.push(this.slice(i, i + chunkSize));
    return array;
  },
});

var app = new Vue({
  el: '#app',
  data: {
    fruits: [
      'apple', 'grape', 'melon', 'orrange', 'pear'
    ]
  },
  computed: {
    chunkedFruits() {
      return this.fruits.chunk(2)
    }
  }
})