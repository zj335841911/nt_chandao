<template>
  <div class="app-markdown-parser" v-html="parseMarkdown(value)">
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import marked from 'marked';

@Component({})
export default class AppMarkdownParser extends Vue {
    /**
     * markdown文本
     *
     * @returns
     * @memberof AppMarkdownParser
     */
    @Prop()
    private value!: string;

    /**
     * marked解析方法
     *
     * @returns
     * @memberof AppMarkdownParser
     */
    public parseMarkdown: Function = marked;

    mounted(){
        console.log(this.value)
    }
}
</script>

<style lang="less" scoped>
@import url("./app-markdown-parser.less");
</style>
