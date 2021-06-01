new Vue({
	el: '#desafio',
	data: {
		classe1: "encolher",
		efeito: false,
		perigo: true,
		classe3: '',
		classe4: '',
		cor5: '',
		estilo5: {
			width: '100px',
			height: '100px'
		},
		width: '0%'
	},
	methods: {
		iniciarEfeito() {
			this.efeito = !this.efeito
			const trocador = setInterval(() => {
				this.classe1 = this.classe1 == "destaque" ? "encolher" : "destaque"

				if(!this.efeito) {
					this.classe1 = "encolher"
					clearInterval(trocador)
				}
			}, 500)
		},
		iniciarProgresso() {
			let valor = 0
			const temporizador = setInterval(() => {
				valor ++
				this.width = `${valor}%`
				if(valor == 100) clearInterval(temporizador)
			}, 100)
		},
		setPerigo(event) {
			if(event.target.value == "true"){
				this.perigo = true
			}else if(event.target.value == "false"){
				this.perigo = false
			}
		}
	}
})
