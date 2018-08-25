var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue.js!',
        list: ['apple', 'banana', 'strawberry'],
        scroll: 0,
        count: 0
    },
    methods: {
        increment: function() {
            this.count += 1
        }
    },
    mounted: function() {
        this.scroll = 100 // 要素のスクロール量を操作
    }
})