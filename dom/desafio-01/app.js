new Vue({
    el: '#desafio',
    data: {
        nome: 'Rachel',
        idade: 29,
        imgsrc: 'https://images.ctfassets.net/5owu3y35gz1g/2gFjjsknJbd0kOK7vpovcV/8ffa9da4e7c824774c693b79c86eec00/Transistor_Rating_Cover.png?w=225&h=310&q=100'
    },
    methods: {
        multiplicarPorTres() {
            return this.idade * 3
        },
        numeroAleatorio() {
            return Math.random()
        }
    }
})