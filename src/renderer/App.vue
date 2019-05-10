<template>
  <div id="app">
    <editor></editor>
    <renderer></renderer>
  </div>
</template>

<script>
  import Editor from '@/components/Editor'
  import Renderer from '@/components/Renderer'

  export default {
    name: 'rubber',
    components: {
      Editor,
      Renderer
    }
  }
</script>

<style lang="scss">
</style>
