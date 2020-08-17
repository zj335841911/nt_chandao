<template>
  <!-- <div :class="[{'hidden':this.refvalue !=''},'app-select-drop-down']">
    <van-dropdown-menu>
      <van-dropdown-item
      @open="(query) => this.onSearch(query,  true)"
        v-model="refvalue"
        :options="items"
        :disabled="disabled ? disabled : false"
      />
    </van-dropdown-menu>  
    <van-icon :style="{display :this.refvalue ==''? 'none' : 'block'}" @click="onClear" class="close_icon" name="cross" />
  </div> -->

     <div class="app-mobile-select-drop-down">
        <ion-icon v-if="curvalue" name="close-circle-outline" @click="clear"></ion-icon>
        <ion-select :value="curvalue"  :disabled="disabled " @ionChange="change" interface="popover">
            <ion-select-option  v-for="option of items" :key="option.value" :value="option.value">{{option.text}}</ion-select-option>
        </ion-select>
    </div>   
</template>

<script lang="ts">
import {
  Vue,
  Component,
  Prop,
  Provide,
  Emit,
  Watch,
  Model
} from "vue-property-decorator";
import CodeListService from "@app-core/service/app/code-list-service";
import { Subject } from 'rxjs';
@Component({
  components: {}
})
export default class AppSelectDropDown extends Vue {
    /**
     * 视图上下文
     *
     * @type {*}
     * @memberof AppSelectDropDown
     */
    @Prop() public context!: any;

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof AppSelectDropDown
     */
    @Prop() public viewparams!: any;

    /**
     * AC参数
     *
     * @type {*}
     * @memberof AppSelectDropDown
     */
    @Prop({default: () => {}}) public acParams?: any;

    /**
     * 表单服务
     *
     * @type {*}
     * @memberof AppSelectDropDown
     */
    @Prop() public service?: any;

    /**
     * 应用实体主信息属性名称
     *
     * @type {string}
     * @memberof AppSelectDropDown
     */
    @Prop({default: 'srfmajortext'}) public deMajorField!: string;

    /**
     * 应用实体主键属性名称
     *
     * @type {string}
     * @memberof AppSelectDropDown
     */
    @Prop({default: 'srfkey'}) public deKeyField!: string;

    /**
     * 表单数据
     *
     * @type {*}
     * @memberof AppSelectDropDown
     */
    @Prop() public data!: any;

    /**
     * 属性项名称
     *
     * @type {string}
     * @memberof AppSelectDropDown
     */
    @Prop() public name!: string;

    /**
     * 是否启用
     *
     * @type {boolean}
     * @memberof AppSelectDropDown
     */
    @Prop() public disabled?: boolean;

    /**
     * 类型
     *
     * @type {string}
     * @memberof AppSelectDropDown
     */
    @Prop() public editortype?: string;
    

    /**
     * 视图参数（如：视图name，title，width，height）
     *
     * @type {*}
     * @memberof AppSelectDropDown
     */
    @Prop() public pickupView?: any;

    /**
     * 数据链接参数
     *
     * @type {*}
     * @memberof AppSelectDropDown
     */
    @Prop() public linkview?: any;

    /**
     * 表单项参数
     * 
     * @type {any}
     * @memberof AppSelectDropDown
     */
    @Prop() public itemParam: any;

    /**
     * 值项名称
     *
     * @type {string}
     * @memberof AppSelectDropDown
     */
    @Prop() public valueitem?: string;

    /**
     * 值
     *
     * @type {*}
     * @memberof AppSelectDropDown
     */
    @Model('change') public value?: any;

    /**
     * 当前值
     *
     * @type {string}
     * @memberof AppSelectDropDown
     */
    public curvalue: string = '';

    /**
     * 下拉数组
     * @type {any[]}
     * @memberof AppSelectDropDown
     */
    public items: any[] = [];

    /** 
     * 下拉图标指向状态管理
     * @type {boolean}
     * @memberof AppSelectDropDown 
     */
    public open: boolean = false;

    /**
     * 输入状态
     *
     * @type {boolean}
     * @memberof AppSelectDropDown
     */
    public inputState: boolean = false;

   /**
     * 当前选择的值
     *
     * @type {string}
     * @memberof AppSelectDropDown
     */
    public selectValue = this.value;

    /**
     * 获取关联数据项值
     *
     * @readonly
     * @memberof AppSelectDropDown
     */
    get refvalue() {
        if (this.valueitem && this.data) {
            return this.data[this.valueitem];
        }
        return this.curvalue;
    }

   /**
     * 关联数据项值
     *
     * @readonly
     * @memberof AppSelectDropDown
     */
    set refvalue(item:any){
        this.onSelect(item);
    }

    /**
     * 值变化
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof AppSelectDropDown
     */
    @Watch('value')
    public onValueChange(newVal: any, oldVal: any) {
        this.curvalue = newVal;
        if (Object.is(this.editortype, 'dropdown') && this.valueitem) {
            const value = this.data[this.valueitem];
            const index = this.items.findIndex((item: any) => Object.is(item.value, value));
            if (index !== -1) {
                return;
            }
            this.items = [];
            if (value) {
                this.items.push({text: newVal, value: value});
            }
            this.onSearch(newVal,  false);
        }
    }


    /**
     * vue 生命周期
     *
     * @memberof AppSelectDropDown
     */
    public created() {
        if(Object.is(this.editortype, 'dropdown')){
            this.onSearch(null,true);
        }
    }

    /**
     * vue 生命周期
     *
     * @memberof AppSelectDropDown
     */
    public mounted() {
    }

    /**
     * 组件销毁
     *
     * @memberof AppSelectDropDown
     */
    public destroyed(): void {
    }

    /**
     * 下拉切换回调
     * @param flag 
     */
    public onSelectOpen(flag: boolean): void {
        this.open = flag;
        if (this.open) {
            this.onSearch(this.curvalue, true);
        }
    }
    /**
     * 执行搜索数据
     * @param query 
     * @param callback 
     */
    public async onSearch(query:any,other: boolean): Promise<any> {
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
        Object.assign(_param, { query: query });
        if(!this.service){
            this.$notify({ type: 'danger', message: '错误，缺少参数service！' });
            
        } else if(!this.acParams.serviceName) {
            this.$notify({ type: 'danger', message: '错误，缺少参数serviceName！' });
        } else if(!this.acParams.interfaceName) {
            this.$notify({ type: 'danger', message: '错误，缺少参数interfaceName！' });
        }
        const appEntityServiceConstructor = window.appEntityServiceConstructor;
        const entityService: any = await appEntityServiceConstructor.getService(this.acParams.serviceName);
        if (entityService[this.acParams.interfaceName] && entityService[this.acParams.interfaceName] instanceof Function) {
            entityService[this.acParams.interfaceName](_context, _param).then((response: any) => {
                if (response && response.status === 200) {
                    this.items = response.data;
                    this.result(this.items);
                }
            }).catch((response: any) => {
                this.$notify({ type: 'danger', message: '错误，请求异常！' });
            });
        }
    }



                
    

   /**
     * 处理返回数据格式
     */
    public result(items:any) {
        let _data = [];
        items.forEach((item:any,index:number) => {
            if(item[this.deMajorField]){
                items[index].text = item[this.deMajorField];
        
            }
            if(item[this.deKeyField]){
                items[index].value = item[this.deKeyField];
            
            }
        });
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
            this.$emit('formitemvaluechange', { name: this.name, value: item[this.deKeyField] });
        }
    }

    /**
     * 下拉选中
     *
     * @param {string} val
     * @memberof AppSelectDropDown
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
            this.$emit('formitemvaluechange', { name: this.valueitem, value: '' });
        }
        if (this.name) {
            this.$emit('formitemvaluechange', { name: this.name, value: '' });
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
        // 判断打开方式
        if (view.placement && !Object.is(view.placement, '')) {
            if (Object.is(view.placement, 'POPOVER')) {
                this.openPopOver($event, view, _context, data);
            } else {
                this.openDrawer(view, _context, data);
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
     * @memberof AppSelectDropDown
     */
    private openIndexViewTab(view: any, context: any, param: any): void {
        const routePath = this.$viewTool.buildUpRoutePath(this.$route, this.context, view.deResParameters, view.parameters, [context] , param);
        this.$router.push(routePath);
    }

    /**
     * 模态模式打开视图
     *
     * @private
     * @param {*} view
     * @param {*} data
     * @memberof AppSelectDropDown
     */
    private async openPopupModal(view: any, context: any, param: any): Promise<any> {
        const result: any = await this.$appmodal.openModal(view, context, param);
        if (result || Object.is(result.ret, 'OK')) {
            this.openViewClose(result);
        }
    }

    /**
     * 抽屉模式打开视图
     *
     * @private
     * @param {*} view
     * @param {*} data
     * @memberof AppSelectDropDown
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
     * @memberof AppSelectDropDown
     */
    private openPopOver($event: any, view: any, context: any, param: any): void {
        // let container: Subject<any> = this.$apppopover.openPop($event, view, context, param);
        // container.subscribe((result: any) => {
        //     if (!result || !Object.is(result.ret, 'OK')) {
        //         return;
        //     }
        //     this.openViewClose(result);
        // });
    }

    /**
     * 独立里面弹出
     *
     * @private
     * @param {string} url
     * @memberof AppSelectDropDown
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
     * @memberof AppSelectDropDown
     */
    private openRedirectView($event: any, view: any, data: any): void {
        this.$http.get(view.url, data).then((response: any) => {
            if (!response || response.status !== 200) {
                this.$notify({ type: 'danger', message: '错误，请求异常！' });
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
                }
                this.openPopupModal(view, null,data);
            } else if (result.openmode.startsWith('DRAWER')) {
                const viewname = this.$util.srfFilePath2(result.viewname);
                const view: any = {
                    viewname: viewname,
                    title: result.title,
                    width: result.width,
                    height: result.height,
                    placement: result.openmode,
                }
                this.openDrawer(view, null, data);
            } else if (Object.is(result.openmode, 'POPOVER')) {
                const viewname = this.$util.srfFilePath2(result.viewname);
                const view: any = {
                    viewname: viewname,
                    title: result.title,
                    width: result.width,
                    height: result.height,
                    placement: result.openmode,
                }
                this.openPopOver($event, view, null, data);
            }
        }).catch((response: any) => {
            if (!response || !response.status || !response.data) {
                this.$notify({ type: 'danger', message: '错误，系统异常！' });
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
     * @memberof AppSelectDropDown
     */
    public openLinkView($event: any): void {
        if (this.disabled) {
            return;
        }
        if (!this.data || !this.valueitem || !this.data[this.valueitem]) {
            this.$notify({ type: 'danger', message: '错误,值项异常' });
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
     * @memberof AppSelectDropDown
     */
    public openViewClose(result: any) {
        let item: any = {};
        if (result.datas && Array.isArray(result.datas)) {
            Object.assign(item, result.datas[0]);
        }

        if (this.data) {
            if (this.valueitem) {
                this.$emit('formitemvaluechange', { name: this.valueitem, value: item[this.deKeyField]?item[this.deKeyField]:item["srfkey"] });
            }
            if (this.name) {
                this.$emit('formitemvaluechange', { name: this.name, value: item[this.deMajorField]?item[this.deMajorField]:item["srfmajortext"] });
            }
        }
    }

    /**
     * 公共参数处理
     *
     * @param {*} arg
     * @returns
     * @memberof AppSelectDropDown
     */
    public handlePublicParams(arg: any): boolean {
        if (!this.itemParam) {
            return true;
        }
        if (!this.data) {
             this.$notify({ type: 'danger', message: '错误,表单数据异常' });
            return false;
        }
        // 合并表单参数
        arg.param = JSON.parse(JSON.stringify(this.viewparams));
        arg.context = JSON.parse(JSON.stringify(this.context));
        // 附加参数处理
        if (this.itemParam.context) {
           
          let _context = this.formatData(this.data,this.itemParam.context);
            Object.assign(arg.context,_context);
        }
        if (this.itemParam.param) {
          let _param = this.formatData(this.data,this.itemParam.param);
            Object.assign(arg.param,_param);
        }
        if (this.itemParam.parentdata) {
          let _parentdata = this.formatData(this.data,this.itemParam.parentdata);
            Object.assign(arg.param,_parentdata);
        }
        return true;
    }

    /**
     * 创建并编辑
     *
     * @param {*} arg
     * @returns
     * @memberof AppSelectDropDown
     */
    public newAndEdit($event:any){
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
                this.openPopOver($event, view, _context, data);
            } else {
                this.openDrawer(view, _context, data);
            }
        } else {
            this.openPopupModal(view, _context, _param);
        }
        
    }

    /**
     * 输入过程中
     *
     * @memberof AppSelectDropDown
     */
    public onInput($event: any) {
        if (Object.is($event, this.value)) {
            this.inputState = true;
        }
    }

    /**
     * 展开下拉
     *
     * @memberof AppSelectDropDown
     */
    public openDropdown() {
        const appPicker: any = this.$refs.appPicker;
        if(appPicker) {
            appPicker.focus();
        }
    }

    /**
     * 收起下拉
     *
     * @memberof AppSelectDropDown
     */
    public closeDropdown() {
        const appPicker: any = this.$refs.appPicker;
        if(appPicker) {
            appPicker.blur();
        }
    }

    /**
     * 附加参数格式化
     *
     * @static
     * @param {any} arg 表单数据
     * @param {any} params 附加参数
     * @returns {any}
     * @memberof AppSelectDropDown
     */
    public  formatData(arg: any, params: any): any {
        let _data: any = {};
        Object.keys(params).forEach((name: string) => {
            if (!name) {
                return;
            }
            let value: string | null = params[name];
            if (value && value.startsWith('%') && value.endsWith('%')) {
                const key = value.substring(1, value.length - 1);
                if (arg && arg.hasOwnProperty(key)) {
                    value = (arg[key] !== null && arg[key] !== undefined) ? arg[key] : null;
                } else {
                    value = null;
                }
            }
            Object.assign(_data, { [name]: value });
        });
        return _data;
    }

    /**
     * change事件
     *
     * @memberof AppSelect
     */
    public change(value: any) {
      this.curvalue = value.detail.value;
        this.$emit("change", value.detail.value);
    }

    /**
     * 清空值
     * @memberof AppSelect
     */
    public clear(){
        this.curvalue="";
        this.$emit('change','')
    }
}
</script>
<style lang="less">
@import './app-mob-select-drop-down.less';
</style>