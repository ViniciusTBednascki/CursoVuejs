import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('contaLetra', function(valor) {
	const array = valor.split(' ')
	array.forEach( (palavra, index) => {
		array[index] = `${palavra} (${palavra.length})`
	})
	return array.join(' ')
})
new Vue({
	render: h => h(App),
}).$mount('#app')
