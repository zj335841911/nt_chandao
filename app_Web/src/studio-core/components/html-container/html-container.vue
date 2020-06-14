<template>
    <div class="html-container" v-html="content"></div>
</template>
<script lang="tsx">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';

/**
 * 操作历史记录
 *
 * @export
 * @class HtmlContainer
 * @extends {Vue}
 */
@Component({})
export default class HtmlContainer extends Vue {
    
    /**
     * 呈现的Html内容
     * 
     * @type string
     * @memberof HtmlContainer
     */
    @Prop({ default: '' })
    public content!: string;
}
</script>
<style lang="less" scoped>
    .html-container {
        height: 100%;
        width: 100%;
    }
</style>