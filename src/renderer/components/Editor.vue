<template>
    <div id="editor" ref="editor">
    </div>
</template>

<script>
  const ace = require('ace-builds')

  // Resolve file path(s) for Ace
  ace.config.setModuleUrl('ace/mode/latex', require('ace-builds/src-noconflict/mode-latex.js'))
  ace.config.setModuleUrl('ace/theme/chaos', require('ace-builds/src-noconflict/theme-chaos.js'))

  export default {
    name: 'editor',
    data () {
      return {
        ace: {
          editor: undefined,
          theme: 'ace/theme/chaos',
          mode: 'ace/mode/latex'
        }
      }
    },
    mounted () {
      ace.edit(this.$refs['editor'], {
        // selectionStyle: string,
        highlightActiveLine: false,
        // highlightSelectedWord: boolean,
        // readOnly: boolean,
        // copyWithEmptySelection: boolean,
        // cursorStyle: 'ace' | 'slim' | 'smooth' | 'wide',
        // mergeUndoDeltas: true | false | 'always',
        behavioursEnabled: true,
        wrapBehavioursEnabled: true,
        autoScrollEditorIntoView: true,
        // keyboardHandler: string,
        // value: '$$\\sum\\limits_{i=0}^{\\infty} \\frac{1}{n^2}$$',
        // session: EditSession,
        wrap: true,
        // wrapMethod: 'code' | 'text' | 'auto',
        indentedSoftWrap: true,
        firstLineNumber: 1,
        // useWorker: boolean,
        useSoftTabs: true,
        tabSize: 4,
        navigateWithinSoftTabs: false,
        // foldStyle: 'markbegin' | 'markbeginend' | 'manual',
        // overwrite: boolean,
        // newLineMode: NewLineMode,
        mode: this.ace.mode,
        // animatedScroll: boolean,
        // showInvisibles: boolean,
        showPrintMargin: false,
        // printMarginColumn: number,
        // printMargin: boolean | number,
        // showGutter: boolean,
        // fadeFoldWidgets: boolean,
        // showFoldWidgets: boolean,
        // showLineNumbers: boolean,
        // displayIndentGuides: boolean,
        highlightGutterLine: false,
        // hScrollBarAlwaysVisible: boolean,
        // vScrollBarAlwaysVisible: boolean,
        // fontSize: number,
        // fontFamily: string,
        maxLines: Infinity,
        minLines: 5,
        scrollPastEnd: 0.5,
        // fixedWidthGutter: boolean,
        theme: this.ace.theme
        // hasCssTransforms: boolean,
        // maxPixelHeight: number
      })
    }
  }
</script>

<style lang="scss">
    .ace_gutter {
        border-right: none !important;
    }
</style>
