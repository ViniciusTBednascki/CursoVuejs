<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do usuário: <strong>{{inverterNome()}}</strong></p>
        <button @click="reiniciarNome">Reiniciar Nome</button>
    </div>
</template>

<script>
export default {
    props: {
        nomeUsuario: {
            type: String,
            //required: true,
            default: "Anônimo"
        }
    },
    methods: {
        inverterNome() {
            return this.nomeUsuario.split('').reverse().join('')
        },
        reiniciarNome() {
            const antigo = this.nomeUsuario
            this.nomeUsuario = 'Pedro'
            this.$emit('nomeMudou', {antigo, novo: this.nomeUsuario})
        }
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
