<template>
	<div id="app">
		<h1>Diretivas</h1>
		<hr>
		<p v-text="'Usando diretiva <strong>v-text</strong>'"></p>
		<p v-html="'Usando diretiva <strong>v-html</strong>'"></p>
		<hr>
		<p v-destaque.atrasar="'teal'">Usando diretiva personalizada</p>
		<p v-destaque:fundo.atrasar="cor">Usando diretiva personalizada</p>
		<hr>
		<p v-destaque-local.atrasar="'teal'">Usando diretiva personalizada</p>
		<p v-destaque-local:fundo.atrasar="cor">Usando diretiva personalizada</p>
	</div>
</template>

<script>
export default {
	directives: {
		'destaque-local': {
			bind(el, binding) {
				//el.style.backgroundColor = 'lightgreen'

				let atraso = 0
				if(binding.modifiers['atrasar']) { atraso = 3000 }

				setTimeout(() => {
					if(binding.arg === 'fundo') {
						el.style.backgroundColor = binding.value
					}else {
						el.style.color = binding.value
					}
				}, atraso)
			}
		}
	},
	data() {
		return {
			cor: 'springgreen'
		}
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', 'Helvetica', 'Arial', 'sans-serif';
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}
</style>
