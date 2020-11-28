<template>
    <van-popup class="app-mob-context-menu"  v-model="isShow" :get-container="eleContainer" >
        <slot  name="content"></slot>
    </van-popup>
</template>
<script lang="ts">
import { Vue, Component, Prop, Provide, Emit, Watch, Model} from "vue-property-decorator";
import { MapService } from '@/ibiz-core/service/map-service';
@Component({
    components: {},
})
export default class appMobContextMenu extends Vue {

    /**
     * 显示值
     *
     * @type {*}
     * @memberof appMobContextMenu
     */
    @Prop({default:false}) value?: boolean;

    /**
     * 绑定值
     *
     * @type {*}
     * @memberof appMobContextMenu
     */
    get isShow(){
        return this.value
    }

    set isShow(newVal:any){
        this.$emit("change",newVal)
    }


    /**
     * 指定挂载节点  默认为#app
     *
     * @type {*}
     * @memberof appMobContextMenu
     */
    @Prop({default:'#app'}) public eleContainer?:any;
    


}
</script>
<style lang="less">
@import "./app-mob-context-menu.less";
</style>