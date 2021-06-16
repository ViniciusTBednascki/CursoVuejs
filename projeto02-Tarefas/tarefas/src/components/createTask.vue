<template>
    <div class="taskInput">
        <input type="text" v-model="taskName" @keyup.enter="addNewTask">
        <button @click="addNewTask">+</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            taskName: null
        }
    },
    methods: {
        addNewTask() {
            this.$emit('newTaskAdded', {name: this.taskName, status: 'todo'})
            this.taskName = null
        }
    }
}
</script>

<style scoped>

</style>