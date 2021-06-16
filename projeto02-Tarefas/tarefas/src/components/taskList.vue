<template>
    <ul class="taskList">
        <template v-for="task in taskList">
            <div :key="task.name" @click="chageTaskStatus(task)"  class="task" :class="task.status">
                <h3>{{task.name}}</h3>
            </div>
        </template>
    </ul>
</template>

<script>
export default {
    props: {
        taskList: Array
    },
    methods: {
        chageTaskStatus(task) {
            const index = this.taskList.indexOf(task)
            this.$emit('statusChanged', index)
        }
    }
}
</script>

<style scoped>
    .taskList {
        height: 50%;
        width: 100%;
    }

    ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        list-style: none;
        margin: 5px 0;
        padding: 0;
        text-align: center;
    }

    .task {
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 30%;
        width: 20%;
        margin: 0.5rem;
    }

    .todo {
        background-color:rgb(138, 0, 0);
        border: 2px solid rgb(78, 0, 0);
    }

    .done {
        background-color: rgb(0, 180, 0);
        border: 2px solid darkgreen;
        text-decoration: line-through;
    }
</style>