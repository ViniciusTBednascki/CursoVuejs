<template>
    <div class="NomeCompleto" @input="$emit('input', value)">
        <Rotulo nome="Nome">
            <input type="text" v-model.lazy="value.nome">
        </Rotulo>
        <Rotulo nome="Sobrenome">
            <input type="text" v-model.lazy="value.sobrenome">
        </Rotulo>
    </div>
</template>

<script>
import Rotulo from './Rotulo.vue'
export default {
    props: {
        value: {
            type: Object,
            required: true
        }
    },
    components: {Rotulo}
}
</script>

<style scoped>

</style>