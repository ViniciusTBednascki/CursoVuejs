<template>
    <div class="taskList">
        <template v-if="taskList.length">
                <task v-for="(task, i) in taskList" :key="i" :task="task" @taskStatusChanged="$emit('statusChanged', i)" @taskDeleted="$emit('taskDeleted', i)"/>
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