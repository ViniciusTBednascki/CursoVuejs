new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        alertar() {
            alert('alerta!!!')
        },
        mudarValor(e) {
            this.valor = e.target.value
        }
    }
})