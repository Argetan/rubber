<template>
  <div id="renderer">
    <div ref="holder"></div>
  </div>
</template>

<script>
  const { typesetMath } = require('mathjax-electron')

  export default {
    name: 'renderer',
    mounted () {
      var container = this.$refs['holder']
      container.innerHTML = '$$\\sum\\limits_{i=0}^{\\infty} \\frac{1}{n^2}$$'

      typesetMath(container, () => {
        console.log('test')
      })
    }
  }
</script>

<style lang="scss" scoped>
</style>
