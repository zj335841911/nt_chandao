<template>
    <ion-title class="view-title">
    <slot></slot>
    </ion-title>
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
}
</script>
<style lang='less'>
@import './app-mob-title.less';
</style>