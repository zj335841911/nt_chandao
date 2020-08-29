<template>
  <div class="app-mob-rich-text-editor" @click="open">
    <div v-html="reValue"></div>
    <ion-icon class="app-mob-rich-text-editor-icon" v-if="!reValue" name="options-outline" @click="open"></ion-icon>
  </div>
</template>
<script lang = 'ts'>
import { Vue, Component, Prop, Model, Watch } from 'vue-property-decorator';
@Component({})
export default class AppRichTextEditor extends Vue {

    /**
     * 值
     *
     * @type {string}
     * @memberof AppRichTextEditor
     */
    @Prop() public value?: any;

   /**
     * 绑定值
     *
     * @type {string}
     * @memberof AppRichTextEditor
     */
    get reValue(){
      return this.value;
    }

    /**
     * 获取值
     *
     * @type {string}
     * @memberof AppRichTextEditor
     */
    set reValue(value:any){
      this.$emit("change", value);
    }

    /**
     * 打开富文本
     *
     * @type {string}
     * @memberof AppRichTextEditor
     */
    public open(){
       this.openPopupModal({ viewname: 'app-rich-text', title: 'app-rich-text'},{},{value:this.value});
    }

    /**
     * 模态打开富文本
     *
     * @type {string}
     * @memberof AppRichTextEditor
     */
    private async openPopupModal(view: any, context: any, param: any): Promise<any> {
        const result: any = await this.$appmodal.openModal(view, context, param);
        if (result || Object.is(result.ret, 'OK')) {
            this.reValue = result.datas[0];
        }
    }

}
</script>
<style lang="less">
@import './app-mob-rich-text-editor.less';
</style>