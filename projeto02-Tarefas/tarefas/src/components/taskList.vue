<template>
    <ul class="taskList">
        <template v-for="task in taskList">
            <button :key="task.name" @click="chageTaskStatus(task)">{{task.name}}</button>
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
    ul {
        list-style: none;
        margin: 5px 0;
        padding: 0;
        text-align: center;
    }

    li {
        margin: 2px 0;
        padding: 2px;
    }
</style>