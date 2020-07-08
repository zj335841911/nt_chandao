import { Prop } from 'vue-property-decorator';
import { Subject } from 'rxjs';
import { FormItemModel } from '@/model/form-detail';
import { MainControlBase } from './MainControlBase';
import { events } from '../global';

/**
 * 表单部件基类
 *
 * @export
 * @class FormControlBase
 * @extends {MainControlBase}
 */
export class FormControlBase extends MainControlBase {

    /**
     * 表单状态
     *
     * @type {Subject<any>}
     * @memberof FormControlBase
     */
    public formState: Subject<any> = new Subject();

    /**
     * 忽略表单项值变化
     *
     * @type {boolean}
     * @memberof FormControlBase
     */
    public ignorefieldvaluechange: boolean = false;

    /**
     * 数据变化
     *
     * @type {Subject<any>}
     * @memberof FormControlBase
     */
    public dataChang: Subject<any> = new Subject();

    /**
     * 原始数据
     *
     * @type {*}
     * @memberof FormControlBase
     */
    public oldData: any = {};

    /**
     * 表单数据对象
     *
     * @type {*}
     * @memberof FormControlBase
     */
    public data: any = {};

    /**
     * 表单模型
     *
     * @type {*}
     * @memberof FormControlBase
     */
    public detailsModel: any = {};

    /**
     * 自动保存
     *
     * @type {boolean}
     * @memberof FormControlBase
     */
    @Prop({ default: false })
    public autosave?: boolean;

    /**
     * 工作流审批意见控件绑定值
     *
     * @type {string}
     * @memberof FormControlBase
     */
    public srfwfmemo: string = "";

    /**
     * 部件行为--loaddraft
     *
     * @type {string}
     * @memberof FormControlBase
     */
    @Prop()
    public loaddraftAction!: string;

    /**
     * 当前执行的行为逻辑
     *
     * @type {string}
     * @memberof FormControlBase
     */
    public currentAction: string = "";

    /**
     * 关系界面计数器
     *
     * @type {number}
     * @memberof FormControlBase
     */
    public drcounter: number = 0;

    /**
     * 需要等待关系界面保存时，第一次调用save参数的备份
     *
     * @type {*}
     * @memberof FormControlBase
     */
    public drsaveopt: any = {};

    /**
     * 表单保存回调存储对象
     *
     * @type {*}
     * @memberof FormControlBase
     */
    public saveState: any;

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof FormControlBase
     */
    public rules: any = {};

    /**
     * 回车事件
     *
     * @param {*} $event
     * @memberof FormControlBase
     */
    public onEnter($event: any): void { }

    /**
     * 值填充
     *
     * @param {*} [data={}]
     * @param {string} action
     * @memberof FormControlBase
     */
    public fillForm(data: any = {}, action: string): void {
        this.ignorefieldvaluechange = true;
        Object.keys(data).forEach((name: string) => {
            if (this.data.hasOwnProperty(name)) {
                this.data[name] = data[name];
            }
        });
        this.$nextTick(() => {
            this.ignorefieldvaluechange = false;
        })
    }

    /**
     * 设置表单项是否启用
     *
     * @param {*} data
     * @memberof FormControlBase
     */
    public setFormEnableCond(data: any): void {
        Object.values(this.detailsModel).forEach((detail: any) => {
            if (!Object.is(detail.detailType, 'FORMITEM')) {
                return;
            }
            const formItem: FormItemModel = detail;
            formItem.setEnableCond(data.srfuf);
        });
    }

    /**
     * 重置草稿表单状态
     *
     * @memberof FormControlBase
     */
    public resetDraftFormStates(): void {
        const form: any = this.$refs.form;
        if (form) {
            form.resetFields();
        }
    }

    /**
     * 重置校验结果
     *
     * @memberof FormControlBase
     */
    public resetValidates(): void {
        Object.values(this.detailsModel).forEach((detail: any) => {
            if (!Object.is(detail.detailType, 'FORMITEM')) {
                return;
            }
            const formItem: FormItemModel = detail;
            formItem.setError('');
        });
    }

    /**
     * 填充校验结果（后台）
     *
     * @param {any[]} fieldErrors
     * @memberof FormControlBase
     */
    public fillValidates(fieldErrors: any[]): void {
        fieldErrors.forEach((error: any) => {
            const formItem: FormItemModel = this.detailsModel[error.field];
            if (!formItem) {
                return;
            }
            this.$nextTick(() => {
                formItem.setError(error.message);
            });
        });
    }

    /**
     * 表单校验状态
     *
     * @returns {boolean}
     * @memberof FormControlBase
     */
    public formValidateStatus(): boolean {
        const form: any = this.$refs.form;
        let validatestate: boolean = true;
        form.validate((valid: boolean) => {
            validatestate = valid ? true : false;
        });
        return validatestate
    }

    /**
     * 获取全部值
     *
     * @returns {*}
     * @memberof FormControlBase
     */
    public getValues(): any {
        return this.data;
    }

    /**
     * 表单项值变更
     *
     * @param {{ name: string, value: any }} $event
     * @returns {void}
     * @memberof FormControlBase
     */
    public onFormItemValueChange($event: { name: string, value: any }): void {
        if (!$event) {
            return;
        }
        if (!$event.name || Object.is($event.name, '') || !this.data.hasOwnProperty($event.name)) {
            return;
        }
        this.data[$event.name] = $event.value;
    }

    /**
     * 设置数据项值
     *
     * @param {string} name
     * @param {*} value
     * @returns {void}
     * @memberof FormControlBase
     */
    public setDataItemValue(name: string, value: any): void {
        if (!name || Object.is(name, '') || !this.data.hasOwnProperty(name)) {
            return;
        }
        if (Object.is(this.data[name], value)) {
            return;
        }
        this.data[name] = value;
    }

    /**
     * 置空对象
     *
     * @param {*} data
     * @memberof FormControlBase
     */
    public ResetData(data: any) {
        if (data) {
            data.clearAll();
        }
    }

    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof FormControlBase
     */
    public getDatas(): any[] {
        return [this.data];
    }

    /**
     * 获取单项数据
     *
     * @returns {*}
     * @memberof FormControlBase
     */
    public getData(): any {
        return this.data;
    }

    /**
     * 新建默认值
     *
     * @memberof FormControlBase
     */
    public createDefault(): void { }

    /**
     * 更新默认值
     *
     * @memberof FormControlBase
     */
    public updateDefault(): void { }

    /**
     * 部件创建完毕
     *
     * @memberof FormControlBase
     */
    public ctrlCreated(): void {
        if (this.viewState) {
            this.viewStateEvent = this.viewState.subscribe((params: any) => {
                const { tag, action, data } = params;
                if (!Object.is(tag, this.name)) {
                    return;
                }
                if (Object.is('autoload', action)) {
                    this.autoLoad(data);
                }
                if (Object.is('load', action)) {
                    this.load(data);
                }
                if (Object.is('loaddraft', action)) {
                    if (this.context.srfsourcekey) {
                        this.copy(this.context.srfsourcekey);
                    } else {
                        this.loadDraft(data);
                    }
                }
                if (Object.is('refresh', action)) {
                    this.refresh(data);
                }
            });
        }
    }

    /**
     * 表单值变化
     *
     * @param {{ name: string, newVal: any, oldVal: any }} { name, newVal, oldVal }
     * @returns {void}
     * @memberof FormControlBase
     */
    public formDataChange({ name, newVal, oldVal }: { name: string, newVal: any, oldVal: any }): void { }

    /**
     * 拷贝内容
     *
     * @param {string} srfkey
     * @memberof FormControlBase
     */
    public copy(srfkey: string): void {
        console.error('「表单部件-拷贝」暂未实现');
    }

    /**
     * 打印
     *
     * @memberof FormControlBase
     */
    public print() {
        console.error('「表单部件-打印」暂未实现');
    }

    /**
     * 表单加载完成
     *
     * @param {*} [data={}]
     * @param {string} action
     * @memberof FormControlBase
     */
    public onFormLoad(data: any = {}, action: string): void { }

    /**
     * 部件刷新
     *
     * @param {any[]} [args]
     * @returns {void}
     * @memberof FormControlBase
     */
    public refresh(args?: any[]): void {
        const arg: any = {};
        if (args && args.length > 0) {
            Object.assign(arg, args[0]);
        }
        if (this.data.srfkey && !Object.is(this.data.srfkey, '')) {
            Object.assign(arg, { srfkey: this.data.srfkey });
            this.load(arg);
            return;
        }
        if (this.data.srfkeys && !Object.is(this.data.srfkeys, '')) {
            Object.assign(arg, { srfkey: this.data.srfkeys });
            this.load(arg);
            return;
        }
    }

    /**
     * 自动加载
     *
     * @param {*} [arg={}]
     * @returns {void}
     * @memberof FormControlBase
     */
    public autoLoad(arg: any = {}): void {
        if (arg.srfkey && !Object.is(arg.srfkey, '')) {
            Object.assign(arg, { srfkey: arg.srfkey });
            this.load(arg);
            return;
        }
        if (arg.srfkeys && !Object.is(arg.srfkeys, '')) {
            Object.assign(arg, { srfkey: arg.srfkeys });
            this.load(arg);
            return;
        }
        this.loadDraft(arg);
    }

    /**
     * 加载
     *
     * @param {*} [opt={}]
     * @returns {void}
     * @memberof FormControlBase
     */
    public load(opt: any = {}): void {
        if (!this.loadAction) {
            this.$Notice.error({ title: '错误', desc: '${view.getName()}视图表单loadAction参数未配置' });
            return;
        }
        const arg: any = { ...opt };
        const viewparamResult: any = Object.assign(arg, this.viewparams);
        const get: Promise<any> = this.service.get(this.loadAction, JSON.parse(JSON.stringify(this.context)), { viewparams: viewparamResult }, this.showBusyIndicator);
        get.then((response: any) => {
            if (response && response.status === 200) {
                const data = response.data;
                this.onFormLoad(data, 'load');
                this.$emit(events.ctrl.LOAD, data);
                this.$nextTick(() => {
                    this.formState.next({ type: 'load', data: data });
                });
            }
        }).catch((response: any) => {
            if (response && response.status && response.data) {
                this.$Notice.error({ title: '错误', desc: response.data.message });
                return;
            }
            if (!response || !response.status || !response.data) {
                this.$Notice.error({ title: '错误', desc: '系统异常' });
                return;
            }
        });
    }

    /**
     * 加载草稿
     *
     * @param {*} [opt={}]
     * @returns {void}
     * @memberof FormControlBase
     */
    public loadDraft(opt: any = {}): void {
        if (!this.loaddraftAction) {
            this.$Notice.error({ title: '错误', desc: '${view.getName()}视图表单loaddraftAction参数未配置' });
            return;
        }
        const arg: any = { ...opt };
        let viewparamResult: any = Object.assign(arg, this.viewparams);
        let post: Promise<any> = this.service.loadDraft(this.loaddraftAction, JSON.parse(JSON.stringify(this.context)), { viewparams: viewparamResult }, this.showBusyIndicator);
        post.then((response: any) => {
            if (!response.status || response.status !== 200) {
                if (response.data) {
                    this.$Notice.error({ title: '错误', desc: response.data.message });
                }
                return;
            }

            const data = response.data;
            this.resetDraftFormStates();
            this.onFormLoad(data, 'loadDraft');
            this.$emit('load', data);
            this.$nextTick(() => {
                this.formState.next({ type: 'load', data: data });
            });
            setTimeout(() => {
                const form: any = this.$refs.form;
                if (form) {
                    form.fields.forEach((field: any) => {
                        field.validateMessage = "";
                        field.validateState = "";
                        field.validateStatus = false;
                    });
                }
            });
        }).catch((response: any) => {
            if (response && response.status && response.data) {
                this.$Notice.error({ title: '错误', desc: response.data.message });
                return;
            }
            if (!response || !response.status || !response.data) {
                this.$Notice.error({ title: '错误', desc: '系统异常' });
                return;
            }
        });
    }

}