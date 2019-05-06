<template>
    <div id="app">
        <h1 class="greeting">あいさつ：{{ msg }}</h1>
        <Content/>
    </div>
</template>

<script>
import Content from './content.vue'

export default {
    components: {
        Content
    },
    data () {
        return { msg: 'こんにちは！' }
    }
}
</script>

<style>
    .greeting { color: #42b983; }
</style>