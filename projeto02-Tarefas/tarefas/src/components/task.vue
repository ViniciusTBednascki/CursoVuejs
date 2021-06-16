<template>
    <div class="task" :class="task.status" @click="statusChange">
        <p>{{task.name}}</p>
    </div>
</template>

<script>
export default {
    props: {
        task: {type: Object, required: true}
    },
    methods: {
        statusChange() {
            this.$emit('myStatusChanged', this.task)
        }
    }
}
</script>

<style scoped>
    .task {
        box-sizing: border-box;
        width: 350px;
        height: 150px;
        padding: 10px;
        border-radius: 8px;
        font-size: 2rem;
        font-weight: 300;
        cursor: pointer;
        user-select: none;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .todo {
        border-left: 12px solid #B73229;
        background-color: #F44336;
    }

    .done {
        color: #DDD;
        border-left: 12px solid #0A8F08;
        background-color: #4CAf50;
        text-decoration: line-through;
    }
</style>