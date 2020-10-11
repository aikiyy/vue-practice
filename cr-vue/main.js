var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello! vue.js!',
        list: [
            { id: 1, name: 'apple', price: 100},
            { id: 2, name: 'banana', price: 200},
            { id: 3, name: 'strawberry', price: 300}
        ],
        order: false,
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
        ],
        name: 'キマイラ',
        val: '',
        budget: 300,
        limit: 1,
        order: false,
        list2: [],
        current: '',
        topics: [
            {value: 'vue', name: 'Vue.js'},
            {value: 'jQuery', name: 'jQuery'}
        ],
        show: false
    },
    methods: {
        increment: function() {
            this.count += 1
        },
        doAdd: function () {
            //リスト内で一番大きいIDを取得
            var max = this.monsters.reduce(function(a, b) {
                return a > b.id ? a : b.id
            }, 0)
            this.monsters.push({
                id: max + 1,
                name: this.name,
                hp: 200
            })
        },
        doRemove: function(index) {
            this.monsters.splice(index, 1)
        },
        doAttack: function (index) {
            this.monsters[index].hp -= 10
        }
    },
    mounted: function() {
        this.scroll = 100 // 要素のスクロール量を操作
        console.log(this.$el);
    },
    created: function () {
        this.monsters.forEach(function (item) {
            this.$set(item, 'active', false)
        }, this)
    },
    computed: {
        matched: function () {
            return this.monsters.filter(function (el) {
                return el.hp <= this.budget
            }, this)
        },
        sorted: function () {
            return _.orderBy(this.matched, 'hp', this.order ? 'desc' : 'asc')
        },
        limited: function () {
            return this.sorted.slice(0, this.limit)
        },
        sortedList: function() {
            return _.orderBy(this.list, 'price', this.order ? 'desc': 'asc')
        }
    },
    watch: {
        current: function(val) {
            // GuthubのAPIからトピックのリポジトリを検索
            axios.get('https://api.github.com/search/repositories', {
                params: {q: 'topic:' + val}
            }).then(function(response) {
                this.list2 = response.data.items
            }.bind(this))
        }
    }
})