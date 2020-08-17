<template>
    <ion-toggle
    :disabled="disabled"
    :checked="curValue"
    @ionChange="change"
    >
  </ion-toggle>
</template>

<script lang="ts">
import { Vue, Component, Prop, Provide, Emit, Watch } from 'vue-property-decorator';

@Component({
    components: {
    }
})
export default class AppMobSwitch extends Vue {  
    /**
     * checked选中状态
     *
     * @type {boolean}
     * @memberof Appswitch
     */
    @Prop() public value?: any;


    /**
     * 绑定值
     *
     * @type {boolean}
     * @memberof Appswitch
     */
    public curValue :boolean =false;
    
    /**
     * change事件
     *
     * @memberof Appswitch
     */
    public change(value:any){
        this.curValue = !this.curValue;
        let emitValue = this.curValue == true ? '1':'0';
        this.$emit('change',emitValue); 
    }

    /**
     * 生命周期
     *
     * @memberof Appswitch
     */
    public created(){
        this. curValue =  this.value == 1 ? true:false
    }

    /**
     * 禁用
     *
     * @type {boolean}
     * @memberof Appswitch
     */
    @Prop() public disabled?: boolean; 
 	}
</script>
<style  lang="less">
@import './app-mob-switch.less';
</style>