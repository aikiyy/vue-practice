Vue.component('comp-child', {
    template: '<li>{{ name }} {{ price }}円</li>',
    props: ['name', 'price']
})