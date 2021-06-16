<template>
    <div class="taskInput">
        <input type="text" v-model="taskName" @keyup.enter="addNewTask" class="formElement" placeholder="nova tarefa?">
        <button @click="addNewTask" class="formElement">+</button>
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
    .taskInput {
        margin: 35px;
    }

    .formElement {
        outline: none;
        font-size: 2rem;
        border: 1px solid #FFF;
        padding: 5px 10px 8px;
        color: #FFF;
    }

    input.formElement {
        width: 500px;
        background-color: #FFF2;
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;

    }

    button.formElement {
        border-left: none;
        background-color: #2196F3;
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
    }
</style>