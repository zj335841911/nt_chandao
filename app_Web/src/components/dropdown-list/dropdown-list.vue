<template>
    <div class="dropdown-list-container">
        <i-select
            v-if="!hasChildren"
            :transfer="true"
            class="dropdown-list"
            v-model="currentVal"
            :disabled="disabled"
            :filterable="filterable"
            @on-open-change="onClick"
            :placeholder="$t('components.dropDownList.placeholder')"
        >
            <i-option v-for="(item, index) in items" :key="index" :value="item.value" :disabled="item.disabled">
                {{
                    $t('codelist.' + tag + '.' + item.value) !== 'codelist.' + tag + '.' + item.value
                        ? $t('codelist.' + tag + '.' + item.value)
                        : item.text
                }}
            </i-option>
        </i-select>
        <i
            v-if="currentVal == null || currentVal == '' || disabled ? false : true"
            @click="clear"
            type="md-close"
            class="el-icon-circle-close"
        />
        <ibiz-select-tree
            v-if="hasChildren"
            class="tree-dropdown-list"
            :disabled="disabled"
            :NodesData="items"
            v-model="currentVal"
            :multiple="false"
        ></ibiz-select-tree>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Watch, Prop, Model } from 'vue-property-decorator';
import CodeListService from '@service/app/codelist-service';
import { Subject, Subscription } from 'rxjs';
import { Util } from '@/utils';

@Component({})
export default class DropDownList extends Vue {
    /**
     * 代码表服务对象
     *
     * @type {CodeListService}
     * @memberof DropDownList
     */
    public codeListService: CodeListService = new CodeListService({ $store: this.$store });

    /**
     * 额外参数
     *
     * @type {*}
     * @memberof DropDownList
     */
    public otherParam: any;

    /**
     * 查询参数
     * @type {*}
     * @memberof DropDownList
     */
    public queryParam: any;

    /**
     * 是否有子集
     * @type {boolean}
     * @memberof DropDownList
     */
    public hasChildren: boolean = false;

    /**
     * 当前选中值
     *
     * @type {*}
     * @memberof DropDownList
     */
    @Model('change') readonly itemValue!: any;

    /**
     * 监控值变化，根据属性类型强制转换
     *
     * @memberof DropDownList
     */
    @Watch('itemValue')
    public valueWatch() {
        try {
            this.readyValue();
            // 代码表集合中不存在改选项，重新准备集合
            if (this.value && !this.items.find((item: any) => Object.is(this.value, item.value))) {
                this.readyCodelist();
            }
        } catch (error) {
            console.log('下拉列表，值转换失败');
        }
    }

    /**
     * 选择实际值
     *
     * @type {*}
     * @memberof DropDownList
     */
    public value: any = null;

    /**
     * 代码表标识
     *
     * @type {string}
     * @memberof DropDownList
     */
    @Prop() public tag?: string;

    /**
     * 代码表类型
     *
     * @type {string}
     * @memberof DropDownList
     */
    @Prop() public codelistType?: string;

    /**
     * 传入表单数据
     *
     * @type {*}
     * @memberof DropDownList
     */
    @Prop() public data?: any;

    /**
     * 属性类型
     *
     * @type {'string' | 'number'}
     * @memberof DropDownList
     */
    @Prop({ default: 'string' })
    public valueType!: 'string' | 'number';

    /**
     * 局部上下文导航参数
     *
     * @type {*}
     * @memberof DropDownList
     */
    @Prop() public localContext!: any;

    /**
     * 局部导航参数
     *
     * @type {*}
     * @memberof DropDownList
     */
    @Prop() public localParam!: any;

    /**
     * 视图上下文
     *
     * @type {*}
     * @memberof AppAutocomplete
     */
    @Prop() public context!: any;

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof AppFormDRUIPart
     */
    @Prop() public viewparams!: any;

    /**
     * 是否禁用
     * @type {any}
     * @memberof DropDownList
     *
     */
    @Prop() public disabled?: any;

    /**
     * 是否支持过滤
     * @type {boolean}
     * @memberof DropDownList
     */
    public filterable: boolean = true;

    /**
     * 下拉选提示内容
     * @type {string}
     * @memberof DropDownList
     */
    @Prop() public placeholder?: string;

    /**
     * 表单状态对象
     *
     * @type {Subject<any>}
     * @memberof AppEmbedPicker
     */
    @Prop() public formState?: Subject<any>;

    /**
     * 订阅对象
     *
     * @protected
     * @type {(Subscription | undefined)}
     * @memberof SelectType
     */
    protected formStateEvent: Subscription | undefined;

    /**
     * 计算属性(当前值)
     * @type {any}
     * @memberof DropDownList
     */
    set currentVal(val: any) {
        if (this.hasChildren && val) {
            let tempVal: any = JSON.parse(val);
            val = tempVal.length > 0 ? tempVal[0].value : null;
        }
        if (isExistAndNotEmpty(val)) {
            this.$emit('change', val);
        } else {
            if (this.value && !this.items.find((item: any) => Object.is(this.value, item.value))) {
                return;
            }
            this.$emit('change', null);
        }
    }

    /**
     * 获取值对象
     *
     * @memberof DropDownList
     */
    get currentVal() {
        if (this.hasChildren && this.itemValue) {
            let list: Array<any> = [];
            this.getItemList(list, this.items);
            let result: any = list.find((item: any) => {
                return item.value == this.itemValue;
            });
            return JSON.stringify([result]);
        }
        return this.value;
    }

    /**
     * 代码表
     *
     * @type {any[]}
     * @memberof DropDownList
     */
    public items: any[] = [];

    /**
     * 获取代码表列表
     *
     * @memberof DropDownList
     */
    public getItemList(list: Array<any>, items: Array<any>) {
        if (items && items.length > 0) {
            items.forEach((item: any) => {
                if (item.children) {
                    this.getItemList(list, item.children);
                }
                list.push(item);
            });
        }
    }

    /**
     * 公共参数处理
     *
     * @param {*} arg
     * @returns
     * @memberof DropDownList
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
            let _param = this.$util.computedNavData(this.data, arg.context, arg.param, this.localParam);
            Object.assign(arg.param, _param);
        }
    }

    /**
     * 格式化代码表值类型
     *
     * @param {any[]} items
     * @returns
     * @memberof DropDownList
     */
    protected formatCodeList(items: any[]): void {
        // 判断类型是否和属性一致
        let judge = false;
        this.items = [];
        try {
            items.forEach((item: any) => {
                const type = this.$util.typeOf(item.value);
                if (type !== this.valueType) {
                    judge = true;
                    if (type === 'number') {
                        item.value = item.value.toString();
                    } else {
                        if(type == "null") {
                            this.valueType == "number" ? item.value = 0 : item.value = '';
                        }else if (item.value.indexOf('.') === -1) {
                            item.value = parseInt(item.value);
                        } else {
                            item.value = parseFloat(item.value);
                        }
                    }
                }
                this.items.push(item);
            });
            if (judge) {
                console.warn(
                    `代码表「${this.tag}」值类型和属性类型不符，目前采用强制转换模式。请修正代码表值类型和属性类型匹配。`
                );
            }
        } catch (error) {
            console.warn(
                '代码表值类型和属性类型不符，目前采用强制转换模式。转换过程异常，请修正代码表值类型和属性类型匹配。'
            );
        }
        this.handleLevelCodeList(Util.deepCopy(this.items));
    }

    /**
     * vue  生命周期
     *
     * @memberof DropDownList
     */
    public created() {
        if (this.formState) {
            this.formStateEvent = this.formState.subscribe(({ type, data }) => {
                if (Object.is('load', type)) {
                    this.readyCodelist();
                    this.readyValue();
                }
            });
        } else {
            this.readyCodelist();
            this.readyValue();
        }
    }

    /**
     * 准备值
     *
     * @memberof DropDownList
     */
    public readyValue() {
        if (this.itemValue == null) {
            this.value = null;
            return;
        }
        if (this.$util.typeOf(this.itemValue) === this.valueType) {
            this.value = this.itemValue;
        } else if (this.valueType === 'number') {
            if (this.itemValue.indexOf('.') === -1) {
                this.value = parseInt(this.itemValue);
            } else {
                this.value = parseFloat(this.itemValue);
            }
        } else {
            this.value = this.itemValue.toString();
        }
    }

    /**
     * 准备代码表
     *
     * @memberof DropDownList
     */
    public readyCodelist() {
        if (this.tag && Object.is(this.codelistType, 'STATIC')) {
            const codelist = this.$store.getters.getCodeList(this.tag);
            if (codelist) {
                this.formatCodeList(JSON.parse(JSON.stringify(codelist.items)));
            } else {
                console.log(`----${this.tag}----${this.$t('app.commonWords.codeNotExist') as string}`);
            }
        } else if (this.tag && Object.is(this.codelistType, 'DYNAMIC')) {
            // 公共参数处理
            let data: any = {};
            this.handlePublicParams(data);
            // 参数处理
            let _context = data.context;
            let _param = data.param;
            this.codeListService
                .getItems(this.tag, _context, _param)
                .then((res: any) => {
                    this.formatCodeList(res);
                })
                .catch((error: any) => {
                    console.log(`----${this.tag}----${this.$t('app.commonWords.codeNotExist') as string}`);
                });
        }
    }

    /**
     * 下拉点击事件
     *
     * @param {*} $event
     * @memberof DropDownList
     */
    public onClick($event: any) {
        if ($event) {
            if (this.tag && Object.is(this.codelistType, 'DYNAMIC')) {
                // 公共参数处理
                let data: any = {};
                this.handlePublicParams(data);
                // 参数处理
                let _context = data.context;
                let _param = data.param;
                this.codeListService
                    .getItems(this.tag, _context, _param)
                    .then((res: any) => {
                        this.formatCodeList(res);
                    })
                    .catch((error: any) => {
                        console.log(`----${this.tag}----${this.$t('app.commonWords.codeNotExist') as string}`);
                    });
            }
        }
    }

    /**
     * 清除事件
     *
     * @param {*} $event
     * @memberof DropDownList
     */
    public clear($event: any) {
        if (this.currentVal) {
            this.currentVal = null;
        }
    }
    /**
     * 处理层级代码表
     *
     * @param {*} items
     * @memberof DropDownList
     */
    public handleLevelCodeList(items: Array<any>) {
        if (items && items.length > 0) {
            this.hasChildren = items.some((item: any) => {
                return item.pvalue;
            });
            if (this.hasChildren) {
                let list: Array<any> = [];
                items.forEach((codeItem: any) => {
                    if (!codeItem.pvalue) {
                        let valueField: string = codeItem.value;
                        this.setChildCodeItems(valueField, items, codeItem);
                        list.push(codeItem);
                    }
                });
                this.items = list;
            }
        }
    }

    /**
     * 计算子类代码表
     *
     * @param {*} items
     * @memberof DropDownList
     */
    public setChildCodeItems(pValue: string, result: Array<any>, codeItem: any) {
        result.forEach((item: any) => {
            if (item.pvalue == pValue) {
                let valueField: string = item.value;
                this.setChildCodeItems(valueField, result, item);
                if (!codeItem.children) {
                    codeItem.children = [];
                }
                codeItem.children.push(item);
            }
        });
    }

    /**
     * vue 生命周期
     *
     * @memberof DropDownList
     */
    public destroyed() {
        if (this.formStateEvent) {
            this.formStateEvent.unsubscribe();
        }
    }
}
</script>
<style lang="less">
@import './dropdown-list.less';
</style>
