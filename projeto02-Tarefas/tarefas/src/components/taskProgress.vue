<template>
    <div class="taskProgress">
        <span class="progressValue">{{percentual}}%</span>
        <div class="progressBar" :style="{width: percentual+'%'}"></div>
    </div>
</template>

<script>
export default {
    props: {
        total: Number,
        done: Number
    },
    computed: {
        percentual: function() {
            return this.total === 0 ? 0 : Math.round((this.done/this.total)*100)
        }
    }
}
</script>

<style scoped>
    .taskProgress {
        position: relative;
        width: 80%;
        border: 1px solid #FFF;
        color: #FFF;
        border-radius: 8px;
        margin-bottom: 15px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .progressBar {
        position: absolute;
        border-radius: 8px;
        height: 100%;
        background-color: #4CAf50;
        align-self: flex-start;
    }

    .progressValue {
        z-index: 1;
        font-size: 1.5rem;
    }
</style>