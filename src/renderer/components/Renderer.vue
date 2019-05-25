<template>
    <div id="renderer">
        <div id="holder" ref="holder"></div>
        <div id="result" ref="result"></div>
    </div>
</template>

<script>
  const {typesetMath} = require('mathjax-electron')

  export default {
    name: 'renderer',
    data () {
      return {
        containers: {
          holder: null,
          result: null
        }
      }
    },
    mounted () {
      this.containers.holder = this.$refs['holder']
      this.containers.result = this.$refs['result']
    },
    watch: {
      '$parent.math' () {
        this.typeset(this.$parent.math)
      }
    },
    methods: {
      typeset (math) {
        this.containers.holder.innerHTML = math

        typesetMath(this.containers.holder, () => {
          this.containers.result.innerHTML = this.containers.holder.innerHTML
        })
      }
    }
  }
</script>

<style lang="scss">
    #holder {
        display: none;
    }
</style>
