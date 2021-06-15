<template>
    <div class="taskInput">
        <input type="text" v-model="newTask" @keyup.enter="addNewTask">
        <button @click="addNewTask">+</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            newTask: null
        }
    },
    methods: {
        addNewTask() {
            this.$emit('newTaskAdded', {name: this.newTask, status: 'todo'})
            this.newTask = null
        }
    }
}
</script>

<style scoped>

</style>