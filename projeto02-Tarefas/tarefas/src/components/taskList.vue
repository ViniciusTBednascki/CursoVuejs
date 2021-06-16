<template>
    <div class="taskList">
        <template v-if="taskList.length">
                <task v-for="task in taskList" :key="task.name" :task="task" @myStatusChanged="changeTaskStatus($event)"/>
        </template>
        <p v-else class="noTask">Sua vida está em dia :)</p>
    </div>
</template>

<script>
import Task from './task.vue'
export default {
    components: {Task},
    props: {
        taskList: { type: Array, required: true}
    },
    methods: {
        changeTaskStatus(task) {
            const index = this.taskList.indexOf(task)
            this.$emit('statusChanged', index)
        },
        deleteTask(task) {
            const index = this.taskList.indexOf(task)
            this.$emit('taskDeleted', index)
        }
    }
}
</script>

<style scoped>
    .taskList {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        list-style: none;
        margin: 5px 0;
        padding: 0;
        text-align: center;
    }

    .taskList .task {
        margin: 5px;
    }

    .noTask {
        color: #AAA;
        font-size: 1.7rem;
    }
</style>