<template>
<!--@click="$emit('taskStatusChanged')" -->
    <div class="task" :class="task.status">
        <span class="close" @click="$emit('taskDeleted', task)">X</span>
        <p>{{task.name}}</p>
    </div>
</template>

<script>
export default {
    props: {
        task: {type: Object, required: true}
    }
}
</script>

<style scoped>
    .task {
        position: relative;
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

    .todo .close {
        background-color: #B73229;
    }

    .done .close {
        background-color: #0A8F08;
    }

    .close {
        position: absolute;
        right: 10px;
        top: 10px;
        font-size: 0.9rem;
        font-weight: 600px;
        height: 20px;
        width: 20px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
    }
</style>