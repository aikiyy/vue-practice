var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue.js!',
        list: ['apple', 'banana', 'strawberry'],
        scroll: 0,
        count: 0,
        classObject: {
            child: true,
            'is-active': true
        },
        styleObject: {
            color: 'red',
            backgroundColor: 'lightgray'
        },
        radius: 50,
        ok: false,
        monsters: [
            {id: 1, name: 'スライム', hp: 100},
            {id: 2, name: 'ゴブリン', hp: 300},
            {id: 3, name: 'ドラゴン', hp: 500}
        ]
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