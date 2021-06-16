<template>
    <div class="completeBar">
        <div class="bar">
            <div class="complete" :style="{width: percentual+'%'}"></div>
        </div>
        <span>{{percentual}}%</span>
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
    .completeBar {
        display: flex;
        flex-direction: column;
        align-content: center;
        width: 50%;
        margin: 10px 0;
    }

    .completeBar span {
        text-align: center;
    }

    .bar {
        height: 1.2rem;
        margin: 0.5rem;
        border: 2px solid #FFF;
    }

    .bar .complete {
        display: flex;
        justify-content: center;
        height: 100%;
        background-color: rgb(0, 180, 0);
    }
</style>