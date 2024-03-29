<template>
    <radio-group class="app-radio-group" v-model="value">
        <radio
            v-for="(_item, index) in items"
            :key="index"
            :label="_item.value"
            :disabled="isDisabled || _item.disabled"
        >
            <span>{{
                Object.is(codelistType, 'STATIC') ? $t('codelist.' + tag + '.' + _item.value) : _item.text
            }}</span>
        </radio>
    </radio-group>
</template>
<script lang="ts">
import { Component, Vue, Prop, Model, Watch } from 'vue-property-decorator';
import CodeListService from '@service/app/codelist-service';

@Component({})
export default class AppRadioGroup extends Vue {
    /**
     * 代码表服务对象
     *
     * @type {CodeListService}
     * @memberof AppRadioGroup
     */
    public codeListService: CodeListService = new CodeListService({ $store: this.$store });

    /**
     * 双向绑定值
     *
     * @type {*}
     * @memberof AppRadioGroup
     */
    @Model('change') item?: any;

    /**
     * 获取值
     *
     * @memberof AppRadioGroup
     */
    get value() {
        return this.item;
    }

    /**
     * 设置值
     *
     * @memberof AppRadioGroup
     */
    set value(val: any) {
        this.$emit('change', val);
    }

    /**
     * 代码表标识
     *
     * @type {string}
     * @memberof AppRadioGroup
     */
    @Prop() public tag?: string;

    /**
     * 代码表类型
     *
     * @type {string}
     * @memberof AppRadioGroup
     */
    @Prop() public codelistType?: string;

    /**
     * 传入表单数据
     *
     * @type {*}
     * @memberof AppRadioGroup
     */
    @Prop() public data?: any;

    /**
     * 监听表单数据变化
     *
     * @memberof AppRadioGroup
     */
    @Watch('data', { immediate: true, deep: true })
    onDataChange(newVal: any, oldVal: any) {
        if (newVal) {
            if (this.tag && this.codelistType == 'DYNAMIC') {
                // 公共参数处理
                let data: any = {};
                this.handlePublicParams(data);
                // 参数处理
                let _context = data.context;
                let _param = data.param;
                console.log('app-radio-group');
                this.codeListService
                    .getItems(this.tag, _context, _param)
                    .then((res: any) => {
                        this.items = res;
                    })
                    .catch((error: any) => {
                        console.log(`----${this.tag}----${this.$t('app.commonWords.codeNotExist') as string}`);
                    });
            }
        }
    }

    /**
     * 是否禁用
     *
     * @type {boolean}
     * @memberof AppRadioGroup
     */
    @Prop() public disabled?: boolean;

    /**
     * 局部上下文导航参数
     *
     * @type {any}
     * @memberof AppRadioGroup
     */
    @Prop() public localContext!: any;

    /**
     * 局部导航参数
     *
     * @type {any}
     * @memberof AppRadioGroup
     */
    @Prop() public localParam!: any;

    /**
     * 视图上下文
     *
     * @type {*}
     * @memberof AppRadioGroup
     */
    @Prop() public context!: any;

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof AppRadioGroup
     */
    @Prop() public viewparams!: any;

    /**
     * 属性名称
     *
     * @type {string}
     * @memberof AppRadioGroup
     */
    @Prop() name?: string;

    /**
     * 是否禁用
     *
     * @readonly
     * @memberof AppRadioGroup
     */
    get isDisabled() {
        if (this.disabled) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * 代码表
     *
     * @type {any[]}
     * @memberof AppRadioGroup
     */
    public items: any[] = [];

    /**
     * 公共参数处理
     *
     * @param {*} arg
     * @returns
     * @memberof AppRadioGroup
     */
    public handlePublicParams(arg: any) {
        // 合并表单参数
        arg.param = this.viewparams ? JSON.parse(JSON.stringify(this.viewparams)) : {};
        arg.context = this.context ? JSON.parse(JSON.stringify(this.context)) : {};
        // 附加参数处理
        if (this.localContext && Object.keys(this.localContext).length > 0) {
            let _context = this.$util.computedNavData(this.data, arg.context, arg.param, this.localContext);
            Object.assign(arg.context, _context);
        }
        if (this.localParam && Object.keys(this.localParam).length > 0) {
            let _param = this.$util.computedNavData(this.data, arg.param, arg.param, this.localParam);
            Object.assign(arg.param, _param);
        }
    }

    /**
     * vue  生命周期
     *
     * @memberof AppRadioGroup
     */
    public created() {
        if (this.tag && this.codelistType == 'STATIC') {
            this.items = this.$store.getters.getCodeListItems(this.tag);
        } else if (this.tag && this.codelistType == 'DYNAMIC') {
            // 公共参数处理
            let data: any = {};
            this.handlePublicParams(data);
            // 参数处理
            let _context = data.context;
            let _param = data.param;
            this.codeListService
                .getItems(this.tag, _context, _param)
                .then((res: any) => {
                    this.items = res;
                })
                .catch((error: any) => {
                    console.log(`----${this.tag}----${this.$t('app.commonWords.codeNotExist') as string}`);
                });
        }
    }
}
</script>
<style lang="less">
@import './app-radio-group.less';
</style>
