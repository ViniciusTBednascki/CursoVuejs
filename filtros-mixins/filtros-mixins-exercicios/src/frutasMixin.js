export default {
    data() {
        return  {
            fruta: '',
            frutas: ['Banana', 'Laranja', 'Maçã']
        }
    },
    methods: {
        add() {
            this.frutas.push(this.fruta)
            this.fruta = ''
        }
    }
}