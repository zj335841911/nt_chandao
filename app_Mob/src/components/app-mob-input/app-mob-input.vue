<template>
    <ion-input  debounce="300" :type="type" :value="value" :placeholder="placeholder" :disabled = "disabled"  @ionChange="change"></ion-input>
</template>

<script lang="ts">
import { Vue, Component, Prop, Provide, Emit, Watch } from 'vue-property-decorator';

@Component({
    components: {
    }
})
export default class AppInput extends Vue {       
    /**
     * 输入值
     *
     * @type {string}
     * @memberof AppInput
     */
    @Prop() public value?: string;
    
    /**
     * 类型
     *
     * @type {string}
     * @memberof AppInput
     */
    @Prop() public type?: string;

    /**
     * 禁用
     *
     * @type {boolean}
     * @memberof AppInput
     */
    @Prop() public disabled?: boolean;

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
        this.$emit("change", value.detail.value);
    }
}
</script>
<style lang="less">

</style>