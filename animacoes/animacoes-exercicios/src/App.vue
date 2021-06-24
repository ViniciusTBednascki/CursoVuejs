<template>
	<div id="app" class="container-fluid">
		<h1>Animações</h1>
		<hr>
		<b-button variant="primary" class="mb-3" @click="exibir = !exibir">Mostrar Mensagem</b-button>

		<!-- <transition name="fade" appear>
			<b-alert variant="info" show v-if="exibir">{{msg}}</b-alert>
		</transition>

		<transition name="slide" appear>
			<b-alert variant="info" show v-show="exibir">{{msg}}</b-alert>
		</transition>

		<transition enter-active-class="animated bounce" leave-active-class="animated shake">
			<b-alert variant="info" show v-show="exibir">{{msg}}</b-alert>
		</transition> -->

		<!-- <hr>
		<b-select v-model="tipoAnimacao" class="mb-3">
			<option value="fade">Fade</option>
			<option value="slide">Slide</option>
		</b-select>

		<transition :name="tipoAnimacao" appear mode="out-in">
			<b-alert variant="info" show v-if="exibir" key="info">{{msg}}</b-alert>
			<b-alert variant="warning" show v-else key="warn">{{msg}}</b-alert>
		</transition>

		<hr>
		<b-button variant="success" @click="exibir2 = !exibir2">Alternar</b-button>
		<transition mode="out-in" :css="false" @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter" @enter-cancelled="enterCancelled" @before-leave="beforeLeave" @leave="leave" @after-leave="afterLeave" @leave-cancelled="leaveCancelled">
			<div v-if="exibir2" class="caixa verde" key="verde"></div>
			<div v-else class="caixa azul"  key="azul"></div>
		</transition>

		<hr>
		<div class="mb-4">
			<b-button variant="primary" @click="componenteSelecionado='AlertaInfo'" class="mr-2">Info</b-button>
			<b-button variant="secondary" @click="componenteSelecionado='AlertaAdvertencia'">Advertencia</b-button>
		</div>
		<transition name="fade" mode="out-in">
			<component :is="componenteSelecionado"></component>
		</transition> -->

		<hr>
		<b-button @click="adicionarAluno" class="mb-4">Adicionar aluno</b-button>
		<transition-group name="slide" tag="div">
			<b-list-group v-for="(aluno,i) in alunos" :key="aluno">
				<b-list-group-item @click="removerAluno(i)">{{aluno}}</b-list-group-item>
			</b-list-group>
		</transition-group>
	</div>
</template>

<script>
import AlertaAdvertencia from './alertaAdvertencia.vue'
import AlertaInfo from './alertaInfo.vue'

export default {
	components: {AlertaAdvertencia, AlertaInfo},
	data() {
		return {
			alunos: ['Roberto', 'Julia', 'Teresa', 'Paulo'],
			msg: 'Uma mensagem de informação para o usuário!',
			exibir: false,
			exibir2: true,
			tipoAnimacao: 'fade',
			larguraBase: 0,
			componenteSelecionado: 'AlertaInfo'
		}
	},
    methods: {
		adicionarAluno() {
			const s = Math.random().toString(36).substring(2)
			this.alunos.push(s)
		},
		removerAluno(indice) {
			this.alunos.splice(indice, 1)
		},
		animar(el, done, negativo) {
			let rodada = 1
			const temporizador = setInterval(() => {
				const novaLargura = this.larguraBase + (negativo? -rodada * 10 : rodada * 10)
				el.style.width = `${novaLargura}px`
				rodada++
				if(rodada > 30) {
					clearInterval(temporizador)
					done()
				}
			}, 10)
		},
        beforeEnter(el) {
			this.larguraBase = 0
			el.style.width = `${this.larguraBase}px`
        },
        enter(el, done) {
			this.animar(el, done, false)
        },
        // afterEnter(el) {
		// 	console.log('afterEnter')
        // },
        // enterCancelled(el) {
		// 	console.log('enterCancelled')
        // },
        beforeLeave(el) {
			this.larguraBase = 300
			el.style.width = `${this.larguraBase}px`
        },
        leave(el, done) {
			this.animar(el, done, true)
        },
        // afterLeave(el) {
		// 	console.log('afterLeave')
        // },
        // leaveCancelled(el) {
		// 	console.log('leaveCancelled')
        // }
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
	font-size: 1.5rem;
}

.caixa {
	height: 100px;
	width: 300px;
	margin: 30px auto;
}

.verde {
	background-color: lightgreen;
}

.azul {
	background-color: lightblue;
}

.fade-enter, .fade-leave-to {
	opacity: 0;
}

.fade-enter-active, .fade-leave-active {
	transition: opacity 1s;
}

@keyframes slide-in {
	from { transform: translateY(20px); }
	to { transform: translateY(0); }
}

@keyframes slide-out {
	from { transform: translateY(0); }
	to { transform: translateY(20px); }
}

.slide-enter-active {
	animation: slide-in 1s ease;
	transition: opacity 1s;
}

.slide-leave-active {
	position: absolute;
	width: 100%;
	animation: slide-out 1s ease;
	transition: opacity 1s;
}

.slide-enter, .slide-leave-to {
	opacity: 0;
}

.slide-move {
	transition: transform 1s;
}
</style>
