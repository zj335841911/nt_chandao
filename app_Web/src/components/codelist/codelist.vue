<template>
    <div class="codelist">
        <span v-if="ifEmpty">{{ $t('codelist.' + tag + '.empty') }}</span>
        <template v-if="!ifEmpty">
            <template v-for="(item, index) in items">
                <div class="codelist-item" :key="index">
                    <i v-if="item.iconcls" :class="item.iconcls"></i>
                    <img v-if="item.icon" :src="getIcon(item.icon)" />
                    <span :class="item.class" :style="{ color: item.color }">
                        {{ isUseLangres ? ($t(item.text) !== item.text) ? $t(item.text) : item.label : item.text }}
                    </span>
                    <span v-if="index != items.length-1">{{ textSeparator }}</span>
               </div>
            </template>
        </template>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Model, Watch } from 'vue-property-decorator';
import CodeListService from '@service/app/codelist-service';
import { Environment } from '@/environments/environment';

@Component({})
export default class CodeList extends Vue {
    /**
     * 代码表服务对象
     *
     * @type {CodeListService}
     * @memberof CodeList
     */
    public codeListService: CodeListService = new CodeListService({ $store: this.$store });

    /**
     * 代码表标识
     *
     * @type {string}
     * @memberof CodeList
     */
    @Prop() public tag!: string;

    /**
     * 代码表类型
     *
     * @type {string}
     * @memberof CodeList
     */
    @Prop() public codelistType?: string;

    /**
     * 当前值
     * @type {any}
     * @memberof CodeList
     *
     */
    @Prop() public value?: string;

    /**
     * 获取或模式
     * @type {boolean}
     * @memberof CodeList
     */
    @Prop({ default: 'STR' }) public renderMode?: string;

    /**
     * 文本分隔符
     * @type {boolean}
     * @memberof CodeList
     */
    @Prop({ default: '、' }) public textSeparator?: string;

    /**
     * 值分隔符
     * @type {boolean}
     * @memberof CodeList
     */
    @Prop({ default: ',' }) public valueSeparator?: string;

    /**
     * 传入表单数据
     *
     * @type {*}
     * @memberof CodeList
     */
    @Prop() public data?: any;

    /**
     * 局部上下文导航参数
     *
     * @type {any}
     * @memberof CodeList
     */
    @Prop() public localContext!: any;

    /**
     * 局部导航参数
     *
     * @type {any}
     * @memberof CodeList
     */
    @Prop() public localParam!: any;

    /**
     * 视图上下文
     *
     * @type {*}
     * @memberof CodeList
     */
    @Prop() public context!: any;

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof CodeList
     */
    @Prop() public viewparams!: any;

    /**
     * 是否为空
     *
     * @memberof CodeList
     */
    public ifEmpty: boolean = false;

    /**
     * 显示数据集合
     *
     * @type {any[]}
     * @memberof CodeList
     */
    public items: any[] = [];

    /**
     * vue  生命周期
     *
     * @memberof CodeList
     */
    public created() {
        this.dataHandle();
    }

    /**
     * 是否使用多语言资源
     * @type {boolean}
     * @memberof CodeList
     */
    public isUseLangres: boolean = false;

    /**
     * 数据值变化
     *
     * @param {*} newval
     * @param {*} val
     * @returns
     * @memberof CodeList
     */
    @Watch('value')
    public onValueChange(newVal: any, oldVal: any) {
        this.dataHandle();
    }

    /**
     * 监听表单数据变化
     *
     * @memberof CodeList
     */
    @Watch('data', { immediate: true, deep: true })
    onDataChange(newVal: any, oldVal: any) {
        if (newVal) {
            this.dataHandle();
        }
    }

    /**
     * 数据处理
     *
     * @memberof CodeList
     */
    private dataHandle() {
        this.isUseLangres = false;
        let _this = this;
        // 空值判断
        if (
            Object.is(this.$util.typeOf(this.value), 'undefined') ||
            Object.is(this.$util.typeOf(this.value), 'null') ||
            Object.is(this.value, '')
        ) {
            this.ifEmpty = true;
            return;
        }
        this.ifEmpty = false;
        // 动态代码表处理
        if (Object.is(this.codelistType, 'DYNAMIC')) {
            // 公共参数处理
            let data: any = {};
            this.handlePublicParams(data);
            // 参数处理
            let _context = data.context;
            let _param = data.param;
            this.codeListService
                .getItems(this.tag, _context, _param)
                .then((res: any) => {
                    let items = res;
                    _this.setItems(items, _this);
                })
                .catch((error: any) => {
                    console.log(`----${_this.tag}----${this.$t('app.commonWords.codeNotExist') as string}`);
                });
            // 静态处理
        } else if (Object.is(this.codelistType, 'STATIC')) {
            this.isUseLangres = true;
            let items = this.$store.getters.getCodeListItems(this.tag);
            _this.setItems(items, _this);
        }
    }

    /**
     * 解析代码表和vlaue，设置items
     *
     * @private
     * @param {any[]} items 代码表数据
     * @param {*} value
     * @returns {*}
     * @memberof CodeList
     */
    private setItems(items: any[], _this: any) {
        if (items) {
            let result: any = [];
            if (Object.is(_this.renderMode, 'NUM')) {
                _this.isUseLangres = false;
                items.map((_item: any, index: number) => {
                    const nValue = parseInt(_this.value as any, 10);
                    const codevalue = _item.value;
                    if ((parseInt(codevalue, 10) & nValue) > 0) {
                        result.push(_item);
                    }
                });
            } else {
                let values: any[] = Object.is(_this.$util.typeOf(_this.value), 'number')
                    ? [_this.value]
                    : [...(_this.value as any).split(_this.valueSeparator)];
                values.map((value: any, index: number) => {
                    const item = _this.getItem(items, value);
                    if (item) {
                        result.push(item);
                    }
                });
            }
            // 设置items
            if (result.length != 0) {
                _this.items = result;
            } else {
                _this.items = [{ text: _this.value }];
            }
        }
    }

    /**
     * 获取代码项
     *
     * @private
     * @param {any[]} items
     * @param {*} value
     * @returns {*}
     * @memberof CodeList
     */
    private getItem(items: any[], value: any): any {
        let result: any = {};
        const arr: Array<any> = items.filter((item) => {
            return item.value == value;
        });
        if (arr.length !== 1) {
            return undefined;
        }
        result = { ...arr[0] };
        if (Object.is(this.codelistType, 'STATIC')) {
            let value = JSON.parse(JSON.stringify(result));
            value.text = 'codelist.' + this.tag + '.' + value.value;
            return value;
        } else {
            return result;
        }
    }

    /**
     * 公共参数处理
     *
     * @param {*} arg
     * @returns
     * @memberof CodeList
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
     * 获取图片路径
     *
     * @param {*} arg
     * @returns
     * @memberof CodeList
     */
    public getIcon(arg:any){
       if(!arg){
           return;
        }
       if(Object.prototype.toString.call(arg)=="[object String]"){
           try {
               let targetData:any = JSON.parse(arg);
               if(Object.prototype.toString.call(targetData) == "[object Array]"){
                    if(targetData && targetData.length >0){
                        let fileId:string = targetData[0] && targetData[0].id;
                        return Environment.BaseUrl + "ibizutil/download/" + fileId;
                    }
                }else if(Object.prototype.toString.call(targetData) === '[object Object]'){
                        let fileId:string = targetData && targetData.id;
                        return Environment.BaseUrl + "ibizutil/download/" + fileId;
                }
           } catch (error) {
               return arg;
           }
       }else if(Object.prototype.toString.call(arg) == "[object Array]"){
           if(arg && arg.length >0){
               let fileId:string = arg[0] && arg[0].id;
               return Environment.BaseUrl + "ibizutil/download/" + fileId;
           }
       }else if(Object.prototype.toString.call(arg) === '[object Object]'){
            let fileId:string = arg && arg.id;
            return Environment.BaseUrl + "ibizutil/download/" + fileId;
       }else{
            return arg;
       }
    }
}
</script>

<style lang="less">
.codelist {
    display: flex;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;
    overflow: hidden;
    .codelist-item{
        padding: 0px 3px;
        display: flex;
        align-items: center;
        max-height: 32px;
        > img{
            max-height: 32px;
            width: auto;
            margin-right: 6px;
            border-radius: 50%;
        }
    }
}
</style>
