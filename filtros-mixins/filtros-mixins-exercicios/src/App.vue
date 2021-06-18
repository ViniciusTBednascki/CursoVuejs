<template>
	<div id="app">
		<h1>Filtros & Mixins</h1>
		<hr>
		<p>{{cpfDoAluno | cpf | inverter}}</p>
		<input type="text" :value="cpfDoAluno | inverter">
		<hr>
		<Frutas/>
		<hr>
        <ul>
            <li v-for="fruta in frutas" :key="fruta">{{fruta}}</li>
        </ul>
        <input type="text" v-model="fruta" @keydown.enter="add">
	</div>
</template>

<script>
import Frutas from './frutas.vue'
	
export default {
	components: {Frutas},
	filters: {
		cpf(valor) {
			const arr = valor.split('')
			arr.splice(3,0,'.')
			arr.splice(7,0,'.')
			arr.splice(11,0,'-')
			return arr.join('')
		}
	},
	data() {
		return {
			cpfDoAluno: '10056647534',
            fruta: '',
            frutas: ['Banana', 'Laranja', 'maçã']
		}
	},
    methods: {
        add() {
            this.frutas.push(this.fruta)
            this.fruta = ''
        }
    }
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}

input {
	font-size: 1.5rem;
}
</style>
