<template>
    <ion-row class="app-form-group">
        <ion-item-divider @click="clickCollapse">
            <ion-label>
                <span :class="titleClass">{{caption}}</span>
            </ion-label>
            <ion-icon v-show="titleBarCloseMode !== 0" class="group-collapse" :name="collapseContant ? 'chevron-back-outline' : 'chevron-down-outline'"></ion-icon>
        </ion-item-divider>
        <ion-row v-show="!collapseContant" class="form-group-content">
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
}
</script>
<style lang='less'>
@import './app-form-group.less';
</style>