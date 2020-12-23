<template>
    <ion-button v-if="styleType==='default'" class="app-mob-button" :disabled="disabled" :class="className" @click="on_button_click">
        <ion-icon :name="iconName" />
        {{ text }} 
    </ion-button>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
@Component({
    components: {}
})
export default class AppMobButton extends Vue {

    /**
     * 按钮图标名称
     */
    @Prop() 
    private iconName?: string;

    /**
     * 按钮名称
     */
    @Prop() 
    private text?: string;

    /**
     * 按钮class名称
     */
    @Prop() 
    private className?: string;

    /**
     * 按钮类型
     */
    @Prop() 
    private type?: string;

    /**
     * 按钮样式风格
     */
    @Prop({ default: 'default' }) 
    private styleType?: string;

    /**
     * 按钮是否禁用
     */
    @Prop({ default: false }) 
    private disabled?: boolean;

    /**
     * 按钮点击事件
     */
    private on_button_click() {
        this.$emit('click')
    }
}
</script>
<style lang="less">
  @import "./app-mob-button.less";
</style>