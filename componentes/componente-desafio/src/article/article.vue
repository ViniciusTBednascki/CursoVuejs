<template>
    <div class="article">
        <article-headline />

        <article-content />
    </div>
</template>

<script>
import articleHeadline from './articleHeadline.vue'
import articleContent from './articleContent.vue'

export default {
    components: {
        'article-headline': articleHeadline,
        'article-content': articleContent
    }
}
</script>