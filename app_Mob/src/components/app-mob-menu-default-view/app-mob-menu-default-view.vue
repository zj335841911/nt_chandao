<template>
    <ion-tabs ref="ionNav" class="app-mob-menu-default-view" @ionTabsDidChange="selectItem($event)">
        <template v-for="item in items">
                <template v-if="!item.hidden">
                    <ion-tab :key="item.id" :tab="item.name" >
                        <component  v-if="item.id == activeId" :is="item.componentname" viewDefaultUsage="indexView"></component>
                    </ion-tab>
                </template>
        </template>

        <ion-tab-bar slot="bottom">
            <template v-for="item in items">
                <template v-if="!item.hidden">
                    <ion-tab-button :tab="item.name" :key="item.id" :selected="item.id == activeId" @click="active(item)">
                        <ion-icon :name=" item.iconcls ? item.iconcls : 'home' ">
                        </ion-icon>
                        <ion-label>{{$t(`app.menus.${menuName}.${item.name}`)}}</ion-label>
                        <template v-if="counterdata[item.counterid]">
                            <ion-badge color="danger">{{counterdata[item.counterid]}}</ion-badge>
                        </template>
                    </ion-tab-button>
                </template>
            </template>
        </ion-tab-bar>

    </ion-tabs>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit, Model } from 'vue-property-decorator';
@Component({
    components: {
    }
})
export default class AppMobMenuDefaultView extends Vue {

    /**
     * 双向值绑定
     *
     * @type {*}
     * @memberof AppMobMenuDefaultView
     */
    @Model("change") readonly itemValue?: any;


    /**
     * 获取值
     *
     * @type {*}
     * @memberof AppMobMenuDefaultView
     */
    get defaultActive(): any {
        this.items.some((item: any) => {
            if (Object.is(item.name, this.itemValue)) {
                item.select = true;
                return true;
            }
            return false;
        });
        return this.itemValue;
    }

    /**
     * 设置值
     *
     * @memberof AppMobMenuDefaultView
     */
    set defaultActive(val) {
        this.$emit("change", val);
    }

    /**
     * 菜单名称
     *
     * @type {string}
     * @memberof AppMobMenuDefaultView
     */
    @Prop() public menuName!: string;

    /**
     * 菜单数据项
     *
     * @type {Array<any>}
     * @memberof AppMobMenuDefaultView
     */
    @Prop() public items!: Array<any>;

    /**
     * 菜单模型
     *
     * @type {Array<any>}
     * @memberof AppMobMenuDefaultView
     */
    @Prop() public menuModels!: Array<any>;

    /**
     * 计数器名称
     *
     * @type {string}
     * @memberof AppMobMenuDefaultView
     */
    @Prop() public counterName!: string;

    /**
     * 激活id
     *
     * @type {string}
     * @memberof AppMobMenuDefaultView
     */
    public activeId = "";

    /**
     * 生命周期
     *
     * @memberof AppMobMenuDefaultView
     */
    public created() {
        let count = 0;
        this.items.forEach((item:any,index:number) => {
            if(item.hidden == false){
                count++;
            }
            if(count == 1){
                this.activeId = item.id;
            }
            let model = this.menuModels.find((model:any) => Object.is(model.appfunctag, item.appfunctag));
            if (model) {
                item.componentname = model.componentname;
            }
        });
        this.loadCounterData();
    }

        /**
     * 生命周期
     *
     * @memberof AppMobMenuDefaultView
     */
    public mounted() {
        let ionNav:any = this.$refs.ionNav;
        let currPage = sessionStorage.getItem("currId");
        if(currPage){
            this.items.forEach((item:any,index:number) => {
                if(item.id == currPage){
                    this.activeId =  item.id       
                    ionNav.select(item.name);
                }
            })
        } 
    }

    /**
     * 点击菜单事件
     *
     * @memberof AppMobMenuDefaultView
     */    
    public active(val:any) {
        const index :number = this.items.findIndex((item: any) => Object.is(item.id, val.id));
        this.activeId = this.items[index].id; 
        sessionStorage.setItem("currId",this.items[index].id)
    }

    /**
     * 计数器数据
     *
     * @type {*}
     * @memberof AppMobMenuDefaultView
     */
    public counterdata: any = {};

    /**
     * vue 生命周期
     *
     * @memberof AppMobMenuDefaultView
     */
    public destroyed() {
        this.counterdata = null;
    }

    /**
     * 加载计数器数据
     *
     * @returns {Promise<any>}
     * @memberof AppMobMenuDefaultView
     */
    public async loadCounterData(): Promise<any> {
        const counterServiceConstructor = window.counterServiceConstructor;
        const counterServide = await counterServiceConstructor.getService(this.counterName);
        if (counterServide) {
            this.counterdata = counterServide.counterData;
        }
    }

    /**
     * 菜单选中事件
     *
     * @param {*} val
     * @returns
     * @memberof AppMobMenuDefaultView
     */
    @Emit()
    select(val: any) {
        return val;
    }

    /**
     * 选中菜单项
     *
     * @param {*} $event
     * @returns {void}
     * @memberof AppMobMenuDefaultView
     */
    public selectItem($event: any): void {
        if (!$event) {
            return ;
        }
        let { detail } = $event;
        if (!detail) {
            return ;
        }
        let { tab }  = detail;
        if (!tab) {
            return;
        }
    }
}
</script>

<style lang="less">
@import "./app-mob-menu-default-view.less";
</style>