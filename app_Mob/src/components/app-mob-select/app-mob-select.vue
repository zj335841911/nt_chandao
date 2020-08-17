<template>
    <div class="app-mobile-select">
        <ion-icon v-if="curValue" name="close-circle-outline" @click="clear"></ion-icon>
        <ion-select  :value="curValue" :disabled="disabled ? disabled : false" @ionChange="change" interface="action-sheet" @click="load" :cancel-text="$t('app.button.cancel')">
              <template v-if="codeListType == 'DYNAMIC'">
                <ion-select-option  v-for="option of options" :key="option.value" :value="option.value">{{($t('userCustom.'+tag+'.'+option.value)!== ('userCustom.'+tag+'.'+option.value))?$t('userCustom.'+tag+'.'+option.value) : option.text}}</ion-select-option>
              </template>
              <template v-else>
                <ion-select-option  v-for="option of options" :key="option.value" :value="option.value">{{($t('codelist.'+tag+'.'+option.value)!== ('codelist.'+tag+'.'+option.value))?$t('codelist.'+tag+'.'+option.value) : option.text}}</ion-select-option>
              </template>
        </ion-select>
    </div>   
</template>

<script lang="ts">
import { Vue, Component, Prop, Provide, Emit, Watch, } from "vue-property-decorator";
import CodeListService from "@app-core/service/app/code-list-service";
import { Loading } from '@/ibiz-core/utils';
@Component({
    components: {},
})
export default class AppSelect extends Vue {
    /**
     * 代码表服务对象
     *
     * @type {CodeListService}
     * @memberof AppSelect
     */

    public codeListService: CodeListService = CodeListService.getInstance();

    /**
     * 传入值
     *
     * @type {string}
     * @memberof AppSelect
     */
    @Prop() public value?: string;

    /**
     * 当前选中值
     * @memberof AppSelect
     */
    public curValue: any = this.value;

    /**
     * change事件
     *
     * @memberof AppSelect
     */
    public change(value: any) {
        this.curValue = value.detail.value;
        this.$emit("change", value.detail.value);
    }

    /**
     * 下拉数据数组
     *
     * @type {any[]}
     * @memberof AppSelect
     */
    public options: any[] = [];

    /**
     * 是否禁用
     *
     * @type {string}
     * @memberof AppSelect
     */
    @Prop() public disabled?: string;

    /**
     * 代码表标识
     *
     * @type {string}
     * @memberof AppSelect
     */
    @Prop() public tag!: string;

    /**
     * 代码表类型
     * STATIC：静态
     * DYNAMIC：动态
     *
     * @type {('STATIC' | 'DYNAMIC')}
     * @memberof Login
     */
    @Prop() public codeListType!: 'STATIC' | 'DYNAMIC';

    /**
     * 传入额外参数
     *
     * @type {*}
     * @memberof AppSelect
     */
    @Prop() public itemParam?: any;

    /**
     * 查询参数
     * @type {*}
     * @memberof AppSelect
     */
    public queryParam: any;

    /**
     * 传入表单数据
     *
     * @type {*}
     * @memberof AppSelect
     */
    @Prop() public data?: any;

    /**
     * 应用上下文
     *
     * @type {*}
     * @memberof AppSelect
     */
    @Prop({ default: {} }) protected context?: any;

    /**
     * 是否缓存
     *
     * @type {*}
     * @memberof AppSelect
     */
    @Prop({ default: true }) protected isCache?: boolean;

    /**
     * 是否被缓存
     *
     * @type {*}
     * @memberof AppSelect
     */
    public isCached: boolean = false;

    /**
     * 监听表单数据
     *
     * @param {*} newVal
     * @param {*} val
     * @memberof AppSelect
     */
    @Watch('data', { deep: true })
    onDataChange(newVal: any, val: any) {
        if (newVal) {
            this.handleOtherParam();
        }
    }

    /**
     *  vue  生命周期
     *
     * @memberof AppSelect
     */
    public created() {
        if (Object.is(this.codeListType, "STATIC")) {
            this.options = this.$store.getters.getCodeListItems(this.tag);
        } else {
            this.load();
        }
    }

    /**
     * 加载
     *
     * @returns {Promise<any>}
     * @memberof AppSelect
     */
    public async load(): Promise<any> {
        if (Object.is(this.codeListType, "STATIC")) {
            return;
        }
        if (!this.isCached) {
            Loading.show(this.$t('app.loadding'));
        }
        let response: any = await this.codeListService.getItems(this.tag, this.isCache, { ...this.context }, this.queryParam);
        if (!this.isCached) {
            Loading.hidden();
        }
        if (response && response.status === 200) {
            this.options = response.data;
            if (this.isCache) {
                this.isCached = true;
            }
        } else {
            this.options = [];
        }
    }
    /**
     * 清空值
     * @memberof AppSelect
     */
    public clear() {
        this.curValue = "";
        this.$emit("change", "");
    }

    /**
     * 处理额外参数
     */
    public handleOtherParam() {
        if (!this.itemParam) {
            return;
        }
        this.queryParam = {};
        let parentdata: any = this.itemParam.parentdata;
        if (!(parentdata && Object.keys(parentdata).length > 0)) {
            return;
        }
        Object.keys(parentdata).forEach((item: any) => {
            let value: string | null = parentdata[item];
            if (value && value.startsWith("%") && value.endsWith("%")) {
                const key = value.substring(1, value.length - 1);
                if (this.data && this.data.hasOwnProperty(key)) {
                    value = (this.data[key] !== null && this.data[key] !== undefined) ? this.data[key] : null;
                } else {
                    value = null;
                }
            }
            Object.assign(this.queryParam, { [item]: value });
        });
    }
}
</script>

<style lang="less">
@import './app-mob-select.less';
</style>