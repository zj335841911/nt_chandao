<template>
<div>
    <div class="html-container" v-html="rHtml" @click="handleClick"></div>
    <div class="img-modal" v-show="showModal" @click="() => {showModal = false}">
        <img :src="modalSrc" :alt="modalAlt" class='thum-img'/>
    </div>
</div>
</template>
<script lang="tsx">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import { Environment } from '@/environments/environment';

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
     * 是否显示模态框
     * 
     * @type string
     * @memberof HtmlContainer
     */
    public showModal: boolean = false;

    
    /**
     * 模态框图片路径
     * 
     * @type string
     * @memberof HtmlContainer
     */
    public modalSrc: string = '';
    
    /**
     * 模态框图片alt
     * 
     * @type string
     * @memberof HtmlContainer
     */
    public modalAlt: string = '';

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

    /**
     * 点击事件
     * 
     * @memberof HtmlContainer
     */
    public handleClick($event: any) {
        let img: any = $event.target;
        if(img && Object.is('IMG', img.tagName)) {
            this.modalSrc = img.getAttribute("src");
            this.modalAlt = img.alt;
            this.showModal = true;
        }
    }
}
</script>
<style lang="less">
    .html-container {
        height: 100%;
        width: 100%;

        img {
            max-width: 500px;
            max-height: 500px;
            cursor: zoom-in;
        }
    }
    .img-modal {
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-color:#fff;
        text-align: center;
        width: auto;
        overflow: scroll;
        display: flex;
        justify-content: center;
        align-items: center;
        .thum-img {
            max-width: 100%;
        }
    }
</style>