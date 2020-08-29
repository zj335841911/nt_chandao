<template>
<div>
  <div v-html="reValue"></div><ion-icon name="options-outline" @click="open"></ion-icon>
</div>
</template>
<script lang = 'ts'>
import { Vue, Component, Prop, Model, Watch } from 'vue-property-decorator';
@Component({})
export default class AppRichTextEditor extends Vue {

    /**
     * 输入值
     *
     * @type {string}
     * @memberof AppInput
     */
    @Prop() public value?: any;


    get reValue(){
      return this.value;
    }
    set reValue(value:any){
      this.$emit("change", value);
    }
    /**
     * 类型
     *
     * @type {string}
     * @memberof AppInput
     */
    @Prop() public type?: string;

    /**
     * 占位提示文字
     *
     * @type {string}
     * @memberof AppInput
     */
    @Prop() public placeholder?:string;   
    
    public messages = "";

    public   onEditorBlur(){}

    public  onEditorFocus(){}

     public onEditorReady(){}

     public open(){
       this.openPopupModal({ viewname: 'app-rich-text', title: 'app-rich-text'},{},{value:this.value});
     }

    private async openPopupModal(view: any, context: any, param: any): Promise<any> {
        const result: any = await this.$appmodal.openModal(view, context, param);
        if (result || Object.is(result.ret, 'OK')) {
            this.reValue = result.datas[0];
        }
    }

    public openViewClose(result: any) {
       
    }

}
</script>
<style lang="less">
</style>