<template>
    <div class="app-mobile-datetime-picker">
        <ion-icon v-if="curValue"  name="close-circle-outline" @click="clear"></ion-icon>
        <ion-datetime 
            display-format="YYYY-MM-DD HH:mm:ss" 
            :value="value" 
            :placeholder="placeholder" 
            :disabled="disabled"
            @ionChange="valueChange($event)"
            :cancel-text="$t('cancel_text')"
            :done-text="$t('done_text')"
        ></ion-datetime>
    </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Provide, Emit, Watch } from 'vue-property-decorator';
const moment = require('moment');


@Component({
    i18n: {
        messages: {
            'zh-CN': {
                cancel_text: '取消',
                done_text: '完成'
            },
            'en-US': {
                cancel_text: 'cancel',
                done_text: 'submit'
            }
        }
    },
    components: {
      
    }
})
export default class AppDateTimePicker extends Vue {
    /**
     * 传入值
     *
     * @type {string}
     * @memberof AppDateTimePicker
     */
    @Prop() public value?:string;

    /**
     * 当前选中值
     * @memberof AppDateTimePicker
     */
    public curValue:any = this.value;

    /**
     * 是否禁用
     *
     * @type {boolean}
     * @memberof AppDateTimePicker
     */
    @Prop() public disabled?:boolean;

    /**
     * placeholder
     *
     * @type {boolean}
     * @memberof AppDateTimePicker
     */
    @Prop() public placeholder?:string;

    /**
     *时间选择改变
      *
      * @param event{*}
      * @memberof AppDateTimePicker
      */
    public valueChange(event:any){
        this.curValue = event.detail.value;
        this.$emit('change',event.detail.value);
    }

    /**
     * 清空值
     * @memberof AppDateTimePicker
     */
    public clear(){
        this.curValue = null;
        this.$emit('change','')
    }        
}
</script>
<style lang="less">
@import './app-mob-datetime-picker.less';
</style>