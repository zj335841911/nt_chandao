<template>
    <div class="html-container" v-html="rHtml"></div>
</template>
<script lang="tsx">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import { Environment } from '../../../environments/environment';

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
     * 替换后html内容
     * 
     * @type string
     * @memberof HtmlContainer
     */
    protected rHtml: string = '';
    
    /**
     * 呈现的Html内容
     * 
     * @type string
     * @memberof HtmlContainer
     */
    @Prop({ default: `` })
    public content!: string;

    /**
     * 监控html变化
     * 
     * @memberof HtmlContainer
     */
    @Watch('content', { immediate: true })
    public watchContent(): void {
        if (this.content) {
            if (!Object.is(this.content, '')) {
                this.rHtml = this.content.replace(/\{(\d+)\.(bmp|jpg|jpeg|png|tif|gif|pcx|tga|exif|fpx|svg|psd|cdr|pcd|dxf|ufo|eps|ai|raw|WMF|webp)\}/g, `${Environment.BaseUrl}${Environment.ExportFile}/$1`);
                return;
            }
        }
        this.rHtml = '';
    }
}
</script>
<style lang="less" scoped>
    .html-container {
        height: 100%;
        width: 100%;

        img {
            width: 100%;
        }
    }
</style>