<template>
    <quill-editor class="quill-editor"
                v-model="reValue"
                ref="myQuillEditor"
                @blur="onEditorBlur"
                @focus="onEditorFocus"
                @change="change"
                style="height:calc(100% - 110px)"
                @ready="onEditorReady">
      </quill-editor>
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
    @Prop() public value?: string;


    get reValue(){
      return this.value;
    }
    set reValue(value:any){
      
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
    
    /**
     * change事件
     *
     * @memberof AppInput
     */
    public change(value: any) {
      // console.log(value)
        this.$emit("change", value.html);
    }



    public messages = "";

    public   onEditorBlur(){}

    public  onEditorFocus(){}

     public onEditorReady(){}


}
</script>
<style lang="less">
.quill-editor{
    -webkit-touch-callout: text !important;
    -webkit-user-select: text !important;
    -khtml-user-select: text !important;
    -moz-user-select :text !important;
    -ms-user-select: text !important;
}
</style>