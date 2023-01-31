import Vue from 'vue'

new Vue({
    el: '#app',
    data: {
        titulo: 'Software Java Desktop',
        descricao: 'Um software desktop desenvolvido em Java'
    },
    methods: {
        alterarTitulo(event){
            this.
            titulo = event.target.value
        }
    }
})