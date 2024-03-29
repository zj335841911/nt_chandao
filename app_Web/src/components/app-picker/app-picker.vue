<template>
    <div v-if="Object.is(editortype, 'linkonly')" class="app-picker">
        <a @click="openLinkView">{{ curvalue }}</a>
    </div>
    <div v-else-if="!Object.is(editortype, 'pickup-no-ac') && !Object.is(editortype, 'dropdown')" class="app-picker">
        <div class="app-picker">
            <el-autocomplete
                class="text-value"
                :value-key="deMajorField"
                :disabled="disabled"
                v-model="curvalue"
                size="small"
                :trigger-on-focus="true"
                :fetch-suggestions="
                    (query, callback) => {
                        this.onSearch(query, callback, true);
                    }
                "
                @select="onACSelect"
                @input="onInput"
                @blur="onBlur"
                style="width: 100%"
            >
                <template v-slot:default="{ item }">
                    <!-- <template v-if="item.isNew">
                        <div v-if="linkview" @click="newAndEdit">{{$t('components.appPicker.newAndEdit')}}</div>
                    </template> -->
                    <template v-if="item.tag">
                        <div @click="clickAction(item.tag)">{{ item.caption }}</div>
                    </template>
                    <slot v-else name="default" :item="item"></slot>
                </template>
                <template v-slot:suffix>
                    <i v-if="curvalue && !disabled" class="el-icon-circle-close" @click="onClear"></i>
                    <i v-if="!Object.is(editortype, 'ac') && showButton" class="el-icon-search" @click="openView"></i>
                    <icon v-if="linkview" type="ios-open-outline" @click="openLinkView" />
                </template>
            </el-autocomplete>
        </div>
    </div>
    <div v-else-if="Object.is(editortype, 'pickup-no-ac')" class="app-picker">
        <div class="app-picker">
            <el-input class="text-value" :value="curvalue" readonly size="small" :disabled="disabled">
                <template slot="suffix">
                    <i v-if="curvalue && !disabled" class="el-icon-circle-close" @click="onClear"></i>
                    <i class="el-icon-search" @click="openView"></i>
                    <icon v-if="linkview" type="ios-open-outline" @click="openLinkView" />
                </template>
            </el-input>
        </div>
    </div>
    <div v-else-if="Object.is(editortype, 'dropdown')" class="app-picker">
        <el-select
            ref="appPicker"
            remote
            :remote-method="(query) => this.onSearch(query, null, true)"
            :value="refvalue"
            size="small"
            filterable
            @change="onSelect"
            :disabled="disabled"
            style="width: 100%"
            clearable
            popper-class="app-picker-dropdown"
            @clear="onClear"
            @visible-change="onSelectOpen"
        >
            <template v-if="items">
                <template v-for="_item in items">
                    <el-option
                        v-if="!_item.tag"
                        :key="_item[deKeyField]"
                        :value="_item[deKeyField]"
                        :label="_item[deMajorField]"
                        :disabled="_item.disabled"
                    ></el-option>
                    <el-option v-else :key="_item[deKeyField]" value="action"
                        ><span @click="clickAction(_item.tag)" style="float: left; width: 100%">{{
                            _item.caption
                        }}</span></el-option
                    >
                </template>
            </template>
        </el-select>
        <span style="position: absolute; right: 5px; color: #c0c4cc; top: 0; font-size: 13px">
            <i v-show="open" class="el-icon-arrow-up" @click="closeDropdown"></i>
            <i v-show="!open" class="el-icon-arrow-down" @click="openDropdown"></i>
        </span>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Model, Watch } from 'vue-property-decorator';
import { Subject } from 'rxjs';
import { AppModal } from '@/utils';

@Component({})
export default class AppPicker extends Vue {
    /**
     * 视图上下文
     *
     * @type {*}
     * @memberof AppFormDRUIPart
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
     * AC参数
     *
     * @type {*}
     * @memberof AppFormDRUIPart
     */
    @Prop({ default: () => {} }) public acParams?: any;

    /**
     * 表单服务
     *
     * @type {*}
     * @memberof AppFormDRUIPart
     */
    @Prop() public service?: any;

    /**
     * 应用实体主信息属性名称
     *
     * @type {string}
     * @memberof AppAutocomplete
     */
    @Prop({ default: 'srfmajortext' }) public deMajorField!: string;

    /**
     * 应用实体主键属性名称
     *
     * @type {string}
     * @memberof AppAutocomplete
     */
    @Prop({ default: 'srfkey' }) public deKeyField!: string;

    /**
     * 表单数据
     *
     * @type {*}
     * @memberof AppPicker
     */
    @Prop() public data!: any;

    /**
     * 属性项名称
     *
     * @type {string}
     * @memberof AppPicker
     */
    @Prop() public name!: string;

    /**
     * 是否启用
     *
     * @type {boolean}
     * @memberof AppPicker
     */
    @Prop() public disabled?: boolean;

    /**
     * 是否显示按钮
     *
     * @type {boolean}
     * @memberof AppPicker
     */
    @Prop({ default: true }) public showButton?: boolean;

    /**
     * 类型
     *
     * @type {string}
     * @memberof AppPicker
     */
    @Prop() public editortype?: string;

    /**
     * 视图参数（如：视图name，title，width，height）
     *
     * @type {*}
     * @memberof AppPicker
     */
    @Prop() public pickupView?: any;

    /**
     * 数据链接参数
     *
     * @type {*}
     * @memberof AppPicker
     */
    @Prop() public linkview?: any;

    /**
     * 局部上下文导航参数
     *
     * @type {any}
     * @memberof AppPicker
     */
    @Prop() public localContext!: any;

    /**
     * 局部导航参数
     *
     * @type {any}
     * @memberof AppPicker
     */
    @Prop() public localParam!: any;

    /**
     * 值项名称
     *
     * @type {string}
     * @memberof AppPicker
     */
    @Prop() public valueitem!: string;

    /**
     * 排序
     *
     * @type {string}
     * @memberof AppPicker
     */
    @Prop() public sort?: string;

    /**
     * 行为组
     *
     * @type {Array<any>}
     * @memberof AppPicker
     */
    @Prop() public actionDetails?: Array<any>;

    /**
     * 值
     *
     * @type {*}
     * @memberof AppPicker
     */
    @Model('change') public value!: any;

    /**
     * 当前值
     *
     * @type {string}
     * @memberof AppPicker
     */
    public curvalue: string = '';

    /**
     * 下拉数组
     * @type {any[]}
     * @memberof AppPicker
     */
    public items: any[] = [];

    /**
     * 下拉图标指向状态管理
     * @type {boolean}
     * @memberof AppPicker
     */
    public open: boolean = false;

    /**
     * 输入状态
     *
     * @type {boolean}
     * @memberof AppAutocomplete
     */
    public inputState: boolean = false;

    /**
     * 当前选择的值
     *
     * @type {string}
     * @memberof AppPicker
     */
    public selectValue = this.value;

    /**
     * 下拉列表节点元素
     *
     * @type {*}
     * @memberof AppPicker
     */
    public dropdownDom: any = {};

    /**
     * 值格式
     *
     * @type {*}
     * @memberof AppPicker
     */
    @Prop() public valFormat?: any;

    /**
     * 获取关联数据项值
     *
     * @readonly
     * @memberof AppPicker
     */
    get refvalue() {
        if (this.valueitem && this.data) {
            const key = this.data[this.valueitem];
            if (!key) {
                return null;
            }
            if (!this.data[this.deMajorField]) {
                this.fillTextById();
            }
            if (this.valFormat && this.valFormat.hasOwnProperty(key)) {
                return this.valFormat[key];
            }
            return key;
        }
        return this.curvalue;
    }

    /**
     * 值变化
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof AppPicker
     */
    @Watch('value', { immediate: true })
    public onValueChange(newVal: any, oldVal: any) {
        this.curvalue = newVal;
        if (Object.is(this.editortype, 'dropdown') && this.valueitem) {
            const value = this.data[this.valueitem];
            const index = this.items.findIndex((item: any) => Object.is(item.value, value));
            if (index !== -1) {
                this.fillTextById();
                return;
            }
            this.items = [];
            if (value) {
                this.items.push({ text: newVal, value: value });
            }
            if(newVal && value){
                this.onSearch(newVal, null, false);
            }
        }
    }

    /**
     * vue 生命周期
     *
     * @memberof AppPicker
     */
    public created() {
        if (!Object.is(this.editortype, 'pickup-no-ac') && !Object.is(this.editortype, 'dropdown')) {
            this.curvalue = this.value;
        }
    }

    /**
     * vue 生命周期
     *
     * @memberof AppPicker
     */
    public mounted() {
        const dropdownDom: any = this.$el.getElementsByClassName('app-picker-dropdown')[0];
        this.dropdownDom = dropdownDom;
    }

    /**
     * 组件销毁
     *
     * @memberof AppPicker
     */
    public destroyed(): void {}

    /**
     * 当id在数据中存在时，查找val值填充到表单中
     *
     * @memberof AppPicker
     */
    fillTextById(): void {
        const key = this.data[this.deKeyField];
        const val = this.data[this.valueitem];
        if ((key == null || key == '') && val != null && val !== '') {
            const item = this.items.find(item => item[this.deKeyField] == val);
            if (item != null && this.name) {
                this.$emit('formitemvaluechange', { name: this.name, value: item[this.deMajorField] });
            }
        }
    }

    /**
     * 下拉切换回调
     * @param flag
     */
    public onSelectOpen(flag: boolean): void {
        this.open = flag;
        if (this.open) {
            // 清空旧数据
            this.items = [];
            //设置下拉列表的最大宽度
            this.setDropdownWidth();
            this.onSearch(this.curvalue, null, true);
        }
    }

    /**
     * 设置下拉列表最大宽度使下拉列表宽度和编辑器宽度一致
     *
     * @memberof AppPicker
     */
    public setDropdownWidth() {
        const elInput: any = this.$el.getElementsByClassName('el-input__inner')[0];
        this.dropdownDom.style.maxWidth = elInput.offsetWidth + 'px';
    }

    /**
     * 执行搜索数据
     * @param query
     * @param callback
     */
    public onSearch(query: any, callback: any, other: boolean): void {
        // 公共参数处理
        let data: any = {};
        const bcancel: boolean = this.handlePublicParams(data);
        if (!bcancel) {
            return;
        }
        // 处理搜索参数
        let _context = data.context;
        let _param = data.param;
        query = !query ? '' : query;
        if (!this.inputState && other && Object.is(query, this.value)) {
            query = '';
        }
        this.inputState = false;
        if (this.sort && !Object.is(this.sort, '')) {
            Object.assign(_param, { sort: this.sort });
        }
        Object.assign(_param, { query: query, size: 1000 });
        // 错误信息国际化
        let error: string = this.$t('components.appPicker.error') as any;
        let miss: string = this.$t('components.appPicker.miss') as any;
        let requestException: string = this.$t('components.appPicker.requestException') as any;
        if (!this.service) {
            this.$Notice.error({ title: error, desc: miss + 'service' });
        } else if (!this.acParams.serviceName) {
            this.$Notice.error({ title: error, desc: miss + 'serviceName' });
        } else if (!this.acParams.interfaceName) {
            this.$Notice.error({ title: error, desc: miss + 'interfaceName' });
        } else {
            this.service
                .getItems(this.acParams.serviceName, this.acParams.interfaceName, _context, _param)
                .then((response: any) => {
                    if (!response) {
                        this.$Notice.error({ title: error, desc: requestException });
                    } else {
                        this.items = [...response];
                    }
                    if (this.acParams && this.actionDetails && this.actionDetails.length > 0) {
                        this.items = [...this.items, ...this.actionDetails];
                    }
                    if (callback) {
                        callback(this.items);
                    }
                    this.fillTextById();
                })
                .catch((error: any) => {
                    if (callback) {
                        callback([]);
                    }
                });
        }
    }

    /**
     * 选中数据回调
     * @param item
     */
    public onACSelect(item: any): void {
        this.selectValue = item[this.deMajorField];
        if (this.valueitem) {
            this.$emit('formitemvaluechange', { name: this.valueitem, value: item[this.deKeyField] });
        }
        if (this.name) {
            this.$emit('formitemvaluechange', { name: this.name, value: item[this.deMajorField] });
        }
    }

    /**
     * 下拉选中
     *
     * @param {string} val
     * @memberof AppPicker
     */
    public onSelect(val: string) {
        let index = this.items.findIndex((item) => Object.is(item[this.deKeyField], val));
        if (index >= 0) {
            this.onACSelect(this.items[index]);
        }
    }

    /**
     * 失去焦点事件
     * @param e
     */
    public onBlur(e: any): void {
        this.curvalue = this.value;
    }

    /**
     * 清除
     */
    public onClear($event: any): void {
        if (this.valueitem) {
            this.$emit('formitemvaluechange', { name: this.valueitem, value: null });
        }
        if (this.name) {
            this.$emit('formitemvaluechange', { name: this.name, value: null });
        }
        this.$forceUpdate();
    }

    /**
     * 打开视图
     */
    public openView($event: any): void {
        if (this.disabled) {
            return;
        }
        // 公共参数处理
        let data: any = {};
        const bcancel: boolean = this.handlePublicParams(data);
        if (!bcancel) {
            return;
        }
        // 参数处理
        const view = { ...this.pickupView };
        let _context = data.context;
        let _param = data.param;
        _param.selectedData = [{ srfkey: this.data[this.valueitem], srfmajortext: this.curvalue }];
        // 判断打开方式
        if (view.placement && !Object.is(view.placement, '')) {
            if (Object.is(view.placement, 'POPOVER')) {
                this.openPopOver($event, view, _context, _param);
            } else {
                this.openDrawer(view, _context, _param);
            }
        } else {
            this.openPopupModal(view, _context, _param);
        }
    }

    /**
     * 路由模式打开视图
     *
     * @private
     * @param {string} viewpath
     * @param {*} data
     * @memberof AppPicker
     */
    private openIndexViewTab(view: any, context: any, param: any): void {
        const routePath = this.$viewTool.buildUpRoutePath(
            this.$route,
            this.context,
            view.deResParameters,
            view.parameters,
            [context],
            param
        );
        this.$router.push(routePath);
    }

    /**
     * 模态模式打开视图
     *
     * @private
     * @param {*} view
     * @param {*} data
     * @memberof AppPicker
     */
    private openPopupModal(view: any, context: any, param: any): void {
        let container: Subject<any> = this.$appmodal.openModal(view, context, param);
        container.subscribe((result: any) => {
            if (!result || !Object.is(result.ret, 'OK')) {
                return;
            }
            this.openViewClose(result);
        });
    }

    /**
     * 抽屉模式打开视图
     *
     * @private
     * @param {*} view
     * @param {*} data
     * @memberof AppPicker
     */
    private openDrawer(view: any, context: any, param: any): void {
        let container: Subject<any> = this.$appdrawer.openDrawer(view, context, param);
        container.subscribe((result: any) => {
            if (!result || !Object.is(result.ret, 'OK')) {
                return;
            }
            this.openViewClose(result);
        });
    }

    /**
     * 气泡卡片模式打开
     *
     * @private
     * @param {*} $event
     * @param {*} view
     * @param {*} data
     * @memberof AppPicker
     */
    private openPopOver($event: any, view: any, context: any, param: any): void {
        let container = this.$apppopover.openPop($event, view, context, param);
        container.subscribe((result: any) => {
            if (!result || !Object.is(result.ret, 'OK')) {
                return;
            }
            this.openViewClose(result);
        });
    }

    /**
     * 独立里面弹出
     *
     * @private
     * @param {string} url
     * @memberof AppPicker
     */
    private openPopupApp(url: string): void {
        window.open(url, '_blank');
    }

    /**
     * 打开重定向视图
     *
     * @private
     * @param {*} $event
     * @param {*} view
     * @param {*} data
     * @memberof AppPicker
     */
    private openRedirectView($event: any, view: any, data: any): void {
        this.$http
            .get(view.url, data)
            .then((response: any) => {
                if (!response || response.status !== 200) {
                    this.$Notice.error({
                        title: this.$t('components.appPicker.error') as any,
                        desc: this.$t('components.appPicker.requestException') as any,
                    });
                }
                if (response.status === 401) {
                    return;
                }
                const { data: result } = response;

                if (result.viewparams && !Object.is(result.viewparams.srfkey, '')) {
                    Object.assign(data, { srfkey: result.viewparams.srfkey });
                }

                if (Object.is(result.openmode, 'POPUPAPP') && result.url && !Object.is(result.url, '')) {
                    this.openPopupApp(result.url);
                } else if (Object.is(result.openmode, 'INDEXVIEWTAB') || Object.is(result.openmode, '')) {
                    // 所有数据保持在同一级
                    if (data.srfparentdata) {
                        Object.assign(data, data.srfparentdata);
                        delete data.srfparentdata;
                    }
                    this.openIndexViewTab(view, null, data);
                } else if (Object.is(result.openmode, 'POPUPMODAL')) {
                    const viewname = this.$util.srfFilePath2(result.viewname);
                    const view: any = {
                        viewname: viewname,
                        title: result.title,
                        width: result.width,
                        height: result.height,
                    };
                    this.openPopupModal(view, null, data);
                } else if (result.openmode.startsWith('DRAWER')) {
                    const viewname = this.$util.srfFilePath2(result.viewname);
                    const view: any = {
                        viewname: viewname,
                        title: result.title,
                        width: result.width,
                        height: result.height,
                        placement: result.openmode,
                    };
                    this.openDrawer(view, null, data);
                } else if (Object.is(result.openmode, 'POPOVER')) {
                    const viewname = this.$util.srfFilePath2(result.viewname);
                    const view: any = {
                        viewname: viewname,
                        title: result.title,
                        width: result.width,
                        height: result.height,
                        placement: result.openmode,
                    };
                    this.openPopOver($event, view, null, data);
                }
            })
            .catch((response: any) => {
                if (!response || !response.status || !response.data) {
                    this.$Notice.error({
                        title: this.$t('components.appPicker.error') as any,
                        desc: this.$t('components.appPicker.systemException') as any,
                    });
                    return;
                }
                if (response.status === 401) {
                    return;
                }
            });
    }

    /**
     * 打开链接视图
     *
     * @memberof AppPicker
     */
    public openLinkView($event: any): void {
        if (!this.data || !this.valueitem || !this.data[this.valueitem]) {
            console.error({
                title: this.$t('components.appPicker.error') as any,
                desc: this.$t('components.appPicker.valueitemException') as any,
            });
            return;
        }
        // 公共参数处理
        let data: any = {};
        const bcancel: boolean = this.handlePublicParams(data);
        if (!bcancel) {
            return;
        }
        // 参数处理
        let _context = data.context;
        let _param = data.param;
        Object.assign(_context, { [this.deKeyField]: this.data[this.valueitem] });
        const view = JSON.parse(JSON.stringify(this.linkview));
        const viewname2: string = this.$util.srfFilePath2(view.viewname);
        view.viewname = viewname2;

        if (view.isRedirectView) {
            this.openRedirectView($event, view, data);
        } else if (Object.is(view.placement, 'INDEXVIEWTAB') || Object.is(view.placement, '')) {
            this.openIndexViewTab(view, _context, _param);
        } else if (Object.is(view.placement, 'POPOVER')) {
            this.openPopOver($event, view, _context, _param);
        } else if (Object.is(view.placement, 'POPUPMODAL')) {
            this.openPopupModal(view, _context, _param);
        } else if (view.placement.startsWith('DRAWER')) {
            this.openDrawer(view, _context, _param);
        }
    }

    /**
     * 打开页面关闭
     *
     * @param {*} result
     * @memberof AppPicker
     */
    public openViewClose(result: any) {
        let item: any = {};
        if (result.datas && Array.isArray(result.datas)) {
            Object.assign(item, result.datas[0]);
        }

        if (this.data) {
            if (this.valueitem) {
                this.$emit('formitemvaluechange', {
                    name: this.valueitem,
                    value: item[this.deKeyField] ? item[this.deKeyField] : item['srfkey'],
                });
            }
            if (this.name) {
                this.$emit('formitemvaluechange', {
                    name: this.name,
                    value: item[this.deMajorField] ? item[this.deMajorField] : item['srfmajortext'],
                });
            }
        }
    }

    /**
     * 公共参数处理
     *
     * @param {*} arg
     * @returns
     * @memberof AppPicker
     */
    public handlePublicParams(arg: any): boolean {
        if (!this.data) {
            this.$Notice.error({
                title: this.$t('components.appPicker.error') as any,
                desc: this.$t('components.appPicker.formdataException') as any,
            });
            return false;
        }
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
        return true;
    }

    /**
     * 触发界面行为
     *
     * @param {*} arg
     * @returns
     * @memberof AppPicker
     */
    public clickAction(arg: any) {
        this.$emit('editoractionclick', arg);
    }

    /**
     * 创建并编辑
     *
     * @param {*} arg
     * @returns
     * @memberof AppPicker
     */
    public newAndEdit($event: any) {
        if (this.disabled) {
            return;
        }
        // 公共参数处理
        let data: any = {};
        const bcancel: boolean = this.handlePublicParams(data);
        if (!bcancel) {
            return;
        }
        // 参数处理
        const view = { ...this.linkview };
        view.viewname = this.$util.srfFilePath2(view.viewname);
        let _context = data.context;
        delete _context[this.deKeyField];
        let _param = data.param;
        // 判断打开方式
        if (view.placement && !Object.is(view.placement, '')) {
            if (Object.is(view.placement, 'POPOVER')) {
                this.openPopOver($event, view, _context, _param);
            } else {
                this.openDrawer(view, _context, _param);
            }
        } else {
            this.openPopupModal(view, _context, _param);
        }
    }

    /**
     * 输入过程中
     *
     * @memberof AppAutocomplete
     */
    public onInput($event: any) {
        if (Object.is($event, this.value)) {
            this.inputState = true;
        }
    }

    /**
     * 展开下拉
     *
     * @memberof AppPicker
     */
    public openDropdown() {
        const appPicker: any = this.$refs.appPicker;
        if (appPicker) {
            appPicker.focus();
        }
    }

    /**
     * 收起下拉
     *
     * @memberof AppPicker
     */
    public closeDropdown() {
        const appPicker: any = this.$refs.appPicker;
        if (appPicker) {
            appPicker.blur();
        }
    }
}
</script>
<style lang="less">
@import './app-picker.less';
</style>
