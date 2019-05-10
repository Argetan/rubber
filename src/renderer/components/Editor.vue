<template>
  <div id="editor" ref="editor">
  </div>
</template>

<script>
  const ace = require('ace-builds')

  // Resolve file path(s) for Ace
  ace.config.setModuleUrl('ace/mode/latex', require('ace-builds/src-noconflict/mode-latex.js'))
  ace.config.setModuleUrl('ace/theme/chaos', require('ace-builds/src-noconflict/theme-chaos.js'))

  const mode = 'ace/mode/latex'
  const theme = 'ace/theme/chaos'

  export default {
    name: 'editor',
    data () {
      return {
        ace: {
          editor: undefined
        }
      }
    },
    mounted () {
      this.ace.editor = ace.edit(null)

      this.ace.editor.setOptions({
        selectionStyle: 'line',
        highlightActiveLine: false,
        highlightSelectedWord: true,
        readOnly: false,
        copyWithEmptySelection: false,
        cursorStyle: 'ace',
        mergeUndoDeltas: true,
        behavioursEnabled: true,
        wrapBehavioursEnabled: true,
        showLineNumbers: true,
        hScrollBarAlwaysVisible: false,
        vScrollBarAlwaysVisible: false,
        highlightGutterLine: false,
        animatedScroll: false,
        showInvisibles: false,
        showPrintMargin: false,
        printMarginColumn: 80,
        printMargin: 80,
        fadeFoldWidgets: false,
        showFoldWidgets: true,
        displayIndentGuides: true,
        showGutter: true,
        fontSize: 12,
        scrollPastEnd: 0,
        theme: theme,
        maxLines: 50,
        minLines: 10,
        maxPixelHeight: 0,
        useTextareaForIME: true,
        scrollSpeed: 2,
        dragDelay: 150,
        dragEnabled: true,
        focusTimeout: 0,
        tooltipFollowsMouse: true,
        firstLineNumber: 1,
        overwrite: false,
        newLineMode: 'auto',
        useWorker: true,
        useSoftTabs: true,
        navigateWithinSoftTabs: false,
        tabSize: 4,
        wrap: 'on',
        indentedSoftWrap: true,
        foldStyle: 'markbegin',
        mode: mode,
        enableMultiselect: true,
        enableBlockSelect: true
      })

      this.ace.editor.renderer.setOptions({
        animatedScroll: false,
        showInvisibles: false,
        showPrintMargin: false,
        printMarginColumn: 80,
        printMargin: 80,
        showGutter: true,
        fadeFoldWidgets: false,
        showFoldWidgets: true,
        displayIndentGuides: true,
        highlightGutterLine: true,
        hScrollBarAlwaysVisible: false,
        vScrollBarAlwaysVisible: false,
        fontSize: 12,
        maxLines: 50,
        minLines: 10,
        maxPixelHeight: 0,
        scrollPastEnd: 0,
        theme: theme,
        useTextareaForIME: true
      })

      this.ace.editor.session.setOptions({
        wrap: 'off',
        wrapMethod: 'auto',
        indentedSoftWrap: true,
        firstLineNumber: 1,
        useWorker: true,
        useSoftTabs: true,
        tabSize: 4,
        navigateWithinSoftTabs: false,
        foldStyle: 'markbegin',
        overwrite: false,
        newLineMode: 'auto',
        mode: mode
      })
      this.$refs['editor'].appendChild(this.ace.editor.container)
    }
  }
</script>

<style lang="scss">
.ace_gutter {
    border: none !important;
}
</style>
