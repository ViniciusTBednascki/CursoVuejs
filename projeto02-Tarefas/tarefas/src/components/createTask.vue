<template>
    <div class="taskInput">
        <input type="text" v-model="newTask">
        <button @click="addNewTask()">+</button>
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
            this.$emit('newTaskAdded', this.newTask)
            this.newTask = null
        }
    }
}
</script>

<style scoped>

</style>