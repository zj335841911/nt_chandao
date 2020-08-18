<template>

        <ion-row  class="app-form-group" >
        <ion-item-divider v-if="isShowCaption" :style="{minHeight:caption?'':'10px'}"  @click="clickCollapse">
            <ion-label>
                <span :class="titleClass" class="group-title"><ion-icon class="group-title-icon" v-if="iconName" :name="iconName"></ion-icon>{{caption}}</span>
            </ion-label>
            <ion-icon v-show="titleBarCloseMode !== 0" class="group-collapse" :name="collapseContant ? 'chevron-back-outline' : 'chevron-down-outline'"></ion-icon>
        </ion-item-divider>
        <ion-row ref="group" v-show="!collapseContant" class="form-group-content">
            <slot></slot>
        </ion-row>
    </ion-row>


</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({})
export default class AppFormGroup extends Vue {

    /**
     * 标题
     *
     * @type {string}
     * @memberof AppFormGroup
     */
    @Prop() public caption?: string;

    /**
     * 内置界面样式
     * 
     * @type {string}
     * @memberof AppFormGroup
     */
    @Prop() public uiStyle?: string;

    /**
     * 布局模式
     *
     * @type {string}
     * @memberof AppFormGroup
     */
    @Prop() public layoutType?: string;

    /**
     * 标题样式
     *
     * @type {string}
     * @memberof AppFormGroup
     */    
    @Prop() public titleStyle?:string;

    /**
     * 是否显示标题
     *
     * @type {boolean}
     * @memberof AppFormGroup
     */
    @Prop({ default: true }) public isShowCaption!: boolean;

    /**
     * 信息面板模式
     *
     * @type {boolean}
     * @memberof AppFormGroup
     */
    @Prop({ default: false }) public isInfoGroupMode!: boolean;

    /**
     * 界面行为组
     *
     * @type {*}
     * @memberof AppFormGroup
     */
    @Prop() public uiActionGroup?: any;

    /**
     * 图标名称
     *
     * @type {string}
     * @memberof AppFormGroup
     */
    @Prop() public iconName?: string;

    /**
     * 标题栏关闭模式
     * 0: 不支持关闭
     * 1: 默认打开
     * 2： 默认关闭
     *
     * @type {(number | 0 | 1 | 2)} 
     * @memberof AppFormGroup
     */
    @Prop({ default: 0 }) public titleBarCloseMode!: number | 0 | 1 | 2;

    /**
     * 收缩内容
     *
     * @type {boolean}
     * @memberof AppFormGroup
     */
    public collapseContant: boolean = false;

    /**
     * 计算样式
     *
     * @readonly
     * @type {string[]}
     * @memberof AppFormGroup
     */
    get classes(): string[] {
        return [
            'app-form-group',
            this.isShowCaption && this.collapseContant ? 'app-group-collapse-contant' : '',
            this.isInfoGroupMode ? 'app-info-group-mode' : '',
            Object.is(this.layoutType, 'FLEX') ? 'app-group-flex': ''
        ];
    }

    /**
     * 标题样式
     *
     * @readonly
     * @type {string}
     * @memberof AppFormGroup
     */
    get titleClass():string{
        return this.titleStyle?this.titleStyle:'';
    }

    /**
     * vue 生命周期
     *
     * @memberof AppFormGroup
     */
    public created() {
        this.collapseContant = this.titleBarCloseMode === 2 ? true : false;
    }

    /**
     * 触发收缩
     *
     * @memberof AppFormGroup
     */
    public clickCollapse(): void {
        if(this.titleBarCloseMode === 0) {
            return;
        }
        this.collapseContant = !this.collapseContant;
    }

    /**
     * 执行界面行
     *
     * @param {*} $event
     * @memberof AppFormGroup
     */
    public doUIAction($event: any, item: any): void {
        this.$emit('groupuiactionclick', { event: $event, item: item });
    }

    /**
     * 生命周期
     *
     * @type {string}
     * @memberof AppFormGroup
     */
    public mounted() {
        this.removeExtraLines();
    }

    public removeExtraLines(){
        // 获取到group节点，其最后一项没有下划线
        let groupList: any = this.$refs.group;
        if (groupList && groupList.lastElementChild) {
            groupList.lastElementChild.lines = "none";
        }
        for (let item of groupList.children) {
            if (item.localName && item.localName === "ion-item" && item.nextElementSibling && item.nextElementSibling.localName === "ion-row") {
                item.lines = "none";
            }
        }
    }
}
</script>
<style lang='less'>
@import './app-form-group.less';
</style>