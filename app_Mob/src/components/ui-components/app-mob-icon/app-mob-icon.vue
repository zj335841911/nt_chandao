<template>
    <div>
        <ion-icon :name="name" :size="size" :slot="position" @click.stop="onClick" ></ion-icon>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import { Subject } from 'rxjs';
import { Http } from "@/ibiz-core/utils";
@Component({})
export default class AppMobIcon extends Vue {
    /**
     * 图标name属性
     * 
     * @type {*}
     * @memberof AppMobIcon
     */
    @Prop() public name: any;

    /**
     * 图标位置
     * 
     * @type {*}
     * @memberof AppMobIcon
     */
    @Prop() public position: any;

    /**
     * 图标尺寸size
     * 
     * @type {*}
     * @memberof AppMobIcon
     */
    @Prop() public size: any;

    /**
     * 图标点击事件
     * 
     * @memberof AppMobIcon
     */
    public onClick(){
        this.$emit('onClick');
    }   
}
</script>
<style lang='less'>
@import './app-mob-icon.less';
</style>