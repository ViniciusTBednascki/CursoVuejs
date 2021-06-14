<template>
    <div class="componente">
        <h2>Alterar os Dados de Usuário</h2>
        <p>Edite as informações</p>
        <p>Idade do usuário: <strong>{{idade}}</strong></p>
        <button @click="alterarIdade">Alterar Idade</button>
        <button @click="alterarIdadeFn">Alterar Idade (callback)</button>
    </div>
</template>

<script>
import barramento from '@/barramento.js'
export default {
    props: {
        idade: Number,
        alterarIdadeFn: Function
    },
    methods: {
        alterarIdade() {
            this.idade += 1
            barramento.alterarIdade(this.idade)
        }
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #98b99a;
        color: #fff;
    }
</style>
