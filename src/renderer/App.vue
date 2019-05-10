<template>
  <div id="app">
    <div class="container-fluid">
      <div class="row">
          <div class="col p-0">
            <editor></editor>
          </div>
          <div class="col p-0">
            <renderer></renderer>
          </div>
      </div>
    </div>
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
body {
  // Matches the Chaos theme from Ace
  color: #E6E1DC;
  background: #161616;
}
</style>
