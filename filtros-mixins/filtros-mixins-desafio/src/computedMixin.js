export default {
	computed: {
		palavrasInversas() {
			return "Testando os fitros".split(' ').forEach(palavra => {return palavra.reverse()}).join(' ')
		}
	}
}