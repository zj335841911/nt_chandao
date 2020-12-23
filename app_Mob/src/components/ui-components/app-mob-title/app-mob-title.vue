<template>
    <div class="app-mob-title">
        <ion-title :class="className">
            <label class="title-label">
                <ion-icon v-if="model ? model.icon : false" :name="model.icon"></ion-icon>
                <img v-else-if="model ? model.iconcls : false" :src="model ? model.iconcls : ''" alt="">     
            {{text}}</label>
        </ion-title>
    </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
@Component({
    components: {}
})
export default class AppMobTitle extends Vue {
    /**
     * class
     * 
     * @type {*}
     * @memberof AppMobTitle
     */
    @Prop() public className: any;

    /**
     * text
     * 
     * @type {*}
     * @memberof AppMobTitle
     */
    @Prop() public text: any;

    /**
     * 视图模型数据 model
     * 
     * @type {*}
     * @memberof AppMobTitle
     */
    @Prop() public model?: any;
}
</script>
<style lang='less'>
@import './app-mob-title.less';
</style>