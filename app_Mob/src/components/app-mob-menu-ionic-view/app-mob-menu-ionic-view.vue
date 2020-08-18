<template>
    <div class="app-mob-menu-ionic-view">
        <ion-card-content class="app-mob-menu-ionic-view__content">
            <ion-grid>
                <ion-row>
                    <template v-for="item in items">
                        <ion-col size="3" :key="item.id">
                            <ion-tab-button @click="selectItem(item.name)">
                                <template v-if="item.icon != ''">
                                    <img :src="item.icon" />
                                </template>
                                <template v-else-if="item.iconcls != ''">
                                    <ion-icon v-if="item.iconcls.indexOf('iconfont') === -1" :name="item.iconcls">
                                    </ion-icon>
                                    <svg v-else class="icon" aria-hidden="true">
                                        <use :xlink:href="'#'+item.iconcls.substring(9)"></use>
                                    </svg>
                                </template>
                                <template v-else>
                                    <ion-icon name="home-outline"></ion-icon>
                                </template>
                                <ion-label>{{$t(`app.menus.${menuName}.${item.name}`)}}</ion-label>
                                <template v-if="counterdata[item.counterid]">
                                    <ion-badge color="danger">{{counterdata[item.counterid]}}</ion-badge>
                                </template>
                            </ion-tab-button>
                        </ion-col>
                    </template>
                </ion-row>
            </ion-grid>
        </ion-card-content>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from "vue-property-decorator";
@Component({
    components: {}
})
export default class AppMobMenuIonicView extends Vue {
    /**
     * 菜单名称
     *
     * @type {string}
     * @memberof AppMobMenuIonicView
     */
    @Prop() public menuName!: string;

    /**
     * 菜单数据项
     *
     * @type {Array<any>}
     * @memberof AppMobMenuIonicView
     */
    @Prop() public items!: Array<any>;

    /**
     * 计数器名称
     *
     * @type {string}
     * @memberof AppMobMenuIonicView
     */
    @Prop() public counterName!: string;

    /**
     * 菜单选中事件
     *
     * @param {*} val
     * @returns
     * @memberof AppMobMenuIonicView
     */
    @Emit()
    select(val: any) {
        return val;
    }

    /**
     * 选中菜单项
     *
     * @param {string} name
     * @memberof AppMobMenuIonicView
     */
    public selectItem(name: string): void {
        this.select(name);
    }


    /**
     * 计数器数据
     *
     * @type {*}
     * @memberof AppMobMenuIonicView
     */
    public counterdata: any = {};

    /**
     * vue 生命周期
     *
     * @memberof AppMobMenuIonicView
     */
    public created() {
        this.loadCounterData();
    }

    /**
     * vue 生命周期
     *
     * @memberof AppMobMenuIonicView
     */
    public destroyed() {
        this.counterdata = null;
    }

    /**
     * 加载计数器数据
     *
     * @returns {Promise<any>}
     * @memberof AppMobMenuIonicView
     */
    public async loadCounterData(): Promise<any> {
        const counterServiceConstructor = window.counterServiceConstructor;
        const counterServide = await counterServiceConstructor.getService(this.counterName);
        if (counterServide) {
            this.counterdata = counterServide.counterData;
        }
    }
}
</script>

<style lang="less">
@import "./app-mob-menu-ionic-view.less";
</style>