<template>
  <ion-item :class="classes">
        <template v-if="uiStyle == 'STYLE2'">
            <ion-label :style="{minWidth:labelWidth+'px'}" position="floating" v-if="isShowCaption && labelWidth > 0"><span v-if="required" class="required">* </span>{{isEmptyCaption ? '' : caption}}</ion-label>
            <slot></slot>
        </template>
        <template v-else>
            <template v-if="labelPos == 'LEFT'">
                <ion-label :style="{minWidth:labelWidth+'px'}" v-if="isShowCaption && labelWidth > 0"><span v-if="required" class="required">* </span>{{isEmptyCaption ? '' : caption}}</ion-label>
                <div :style="contentStyle">
                    <slot></slot>
                </div>
            </template>
            <template v-if="labelPos == 'TOP'">
                <ion-label
                    :style="{minWidth:labelWidth+'px'}"
                    position="floating"
                    v-if="isShowCaption && labelWidth > 0"
                >{{isEmptyCaption ? '' : caption}}</ion-label>
                <ion-label>*</ion-label>
                <slot></slot>
            </template>
            <template v-if="labelPos == 'RIGHT' ">
                <slot></slot>
                <ion-label :style="{minWidth:labelWidth+'px'}" v-if="isShowCaption && labelWidth > 0"><span v-if="required" class="required">* </span> {{isEmptyCaption ? '' : caption}}</ion-label>
            </template>
            <template v-if="labelPos == 'NONE'" >
                <slot></slot>
            </template>
      </template>
  </ion-item>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';

@Component({})
export default class AppFormItem extends Vue {

    /**
     * 内容样式
     *
     * @readonly
     * @memberof AppFormItem
     */
    get contentStyle() {
        return {
            width: this.isShowCaption && this.labelWidth > 0 ? `calc(100% - ${this.labelWidth}px)` : '100%',
        }
    }

    /**
     * 名称
     *
     * @type {string}
     * @memberof AppFormItem
     */
    @Prop() public caption!: string;

    /**
     * 错误信息
     *
     * @type {string}
     * @memberof AppFormItem
     */
    @Prop() public error?: string;

    /**
     * label样式
     *
     * @type {string}
     * @memberof AppFormItem
     */
    @Prop() public labelStyle?: string;

    /**
     * 标签位置
     *
     * @type {(string | 'BOTTOM' | 'LEFT' | 'NONE' | 'RIGHT' | 'TOP')}
     * @memberof AppFormItem
     */
    @Prop() public labelPos?: string | 'BOTTOM' | 'LEFT' | 'NONE' | 'RIGHT' | 'TOP';

    /**
     * 标签宽度
     *
     * @type {number}
     * @memberof AppFormItem
     */
    @Prop({}) public labelWidth!: number;

    /**
     * 是否显示标题
     *
     * @type {boolean}
     * @memberof AppFormItem
     */
    @Prop() public isShowCaption?: boolean;

    /**
     * 标签是否空白
     *
     * @type {boolean}
     * @memberof AppFormItem
     */
    @Prop() public isEmptyCaption?: boolean;

    /**
     * 表单项名称
     *
     * @type {string}
     * @memberof AppFormItem
     */
    @Prop() public name!: string;

    /**
     * 内置样式
     *
     * @type {string}
     * @memberof AppFormItem
     */
    @Prop() public uiStyle?: string;

    /**
     * 表单项值规则
     *
     * @type {string}
     * @memberof AppFormItem
     */
    @Prop() public itemRules!: any;

    /**
     * 值规则数组
     *
     * @type {any[]}
     * @memberof AppFormItem
     */
    public rules: any[] = [];

    /**
     * 是否必填
     *
     * @type {boolean}
     * @memberof AppFormItem
     */
    public required: boolean = false;

    /**
     * 表单项值规则监控
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof AppFormItem
     */
    @Watch('itemRules',{deep:true})
    onItemRulesChange(newVal: any, oldVal: any) {
        if (newVal) {
            try {
                this.rules = [];
                const _rules: any[] = newVal;
                this.rules = [..._rules];
                this.rules.some((rule: any) => {
                    if (rule.hasOwnProperty('required')) {
                        this.required = rule.required;
                        return true;
                    }
                    return false;
                });
            } catch (error) {
            }
        }
    }

    /**
     * 计算样式
     *
     * @readonly
     * @type {string []}
     * @memberof AppFormItem
     */
    get classes(): string[] {
        return [
            'app-form-item',
            Object.is(this.labelPos, 'TOP') ? 'app-form-item-label-top' : ''
        ];
    }

    /**
     * label样式
     *
     * @readonly
     * @type {string[]}
     * @memberof IBizMDControl
     */
    get labelclasses(): string[] {
        return [
            this.required ? 'app-form-item-label-required' : '',
            this.labelStyle ? this.labelStyle : ''
        ];
    }

    /**
     * vue 生命周期
     *
     * @memberof AppFormItem
     */
    public mounted() {
        if (this.itemRules) {
            try {
                const _rules: any[] = this.itemRules;
                this.rules = [..._rules];
                this.rules.some((rule: any) => {
                    if (rule.hasOwnProperty('required')) {
                        this.required = rule.required;
                        return true;
                    }
                    return false;
                });
            } catch (error) {
            }
        }
    }

}
</script>
<style lang='less'>
@import './app-form-item.less';
</style>