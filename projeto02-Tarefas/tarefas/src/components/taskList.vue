<template>
    <ul class="taskList">
        <template v-for="task in taskList">
            <div class="task" :key="task.name" @click="chageTaskStatus(task)">
                <span>{{task.name}}</span>
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
        list-style: none;
        margin: 5px 0;
        padding: 0;
        text-align: center;
    }

    .task {
        border: 1px solid #000;
        height: 50%;
        width: 20%;
        margin: 0.5rem;
    }
</style>