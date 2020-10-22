<template>
    <div>
        <span v-if="caption">{{caption}}</span>
        <div :class="contentStyle" :style="sizeStyle">
            <template v-if="Object.is(contentType,'RAW')">
                {{rawContent ? rawContent : ''}}
            </template>
            <template v-else-if="Object.is(contentType,'HTML')">
                <span v-html="htmlContent"/>
            </template>
            <template v-else-if="Object.is(contentType,'IMAGE')">
                <i :class="imageClass ? imageClass : ''"></i>
            </template>
        </div>
    </div>
</template>

<script lang='ts'>
import { Component, Vue, Prop, Model, Watch } from "vue-property-decorator";

@Component({})
export default class AppRawItem extends Vue {

    /**
    * 应用上下文
    * 
    * @type {string}
    * @memberof AppRawItem
    */
    @Prop() public context!: any;

    /**
    * 视图参数
    * 
    * @type {string}
    * @memberof AppRawItem
    */
    @Prop() public viewparams!: any;

    /**
    * 内容类型
    * 
    * @type {string}
    * @memberof AppRawItem
    */
    @Prop() public contentType!: string;

    /**
     * 直接内容
     * 
     * @type {strin}
     * @memberof AppRawItem
     */
    @Prop() public rawContent?: string;

    /**
     * html内容
     * 
     * @type {strin}
     * @memberof AppRawItem
     */
    @Prop() public htmlContent?: string;

    /**
     * 图片
     * 
     * @type {strin}
     * @memberof AppRawItem
     */
    @Prop() public imageClass?: string;

    /**
     * 标题
     *  
     * @type {string}
     * @memberof AppRawItem
     */
    @Prop() public caption?: string;

    /**
     * 内容样式
     * 
     * @type {strin}
     * @memberof AppRawItem
     */
    @Prop() public contentStyle!: string;

    /**
     * 内容宽高
     * 
     * @type {strin}
     * @memberof AppRawItem
     */
    @Prop() public sizeStyle!: string;

}

</script>

<style lang='less'>

</style>