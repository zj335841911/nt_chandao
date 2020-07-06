import { Prop } from 'vue-property-decorator';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { FormControlBase } from './FormControlBase';

/**
 * 编辑表单部件基类
 *
 * @export
 * @class EditFormControlBase
 * @extends {FormControlBase}
 */
export class EditFormControlBase extends FormControlBase {

    /**
     * 关系界面数量
     *
     * @protected
     * @type {number}
     * @memberof EditFormControlBase
     */
    protected drCount: number = 0;

    /**
     * 部件行为--submit--工作流
     *
     * @type {string}
     * @memberof FormControlBase
     */
    @Prop()
    public WFSubmitAction!: string;

    /**
     * 部件行为--start--工作流
     *
     * @type {string}
     * @memberof FormControlBase
     */
    @Prop()
    public WFStartAction!: string;

    /**
     * 部件行为--update
     *
     * @type {string}
     * @memberof EditFormControlBase
     */
    @Prop()
    public updateAction!: string;

    /**
     * 部件行为--remove
     *
     * @type {string}
     * @memberof EditFormControlBase
     */
    @Prop()
    public removeAction!: string;

    /**
     * 部件行为--create
     *
     * @type {string}
     * @memberof EditFormControlBase
     */
    @Prop()
    public createAction!: string;

    /**
     * 表单值变化
     *
     * @param {{ name: string, newVal: any, oldVal: any }} { name, newVal, oldVal }
     * @returns {void}
     * @memberof EditFormControlBase
     */
    public formDataChange({ name, newVal, oldVal }: { name: string, newVal: any, oldVal: any }): void {
        if (this.ignorefieldvaluechange) {
            return;
        }
        this.resetFormData({ name: name, newVal: newVal, oldVal: oldVal });
        this.formLogic({ name: name, newVal: newVal, oldVal: oldVal });
        this.dataChang.next(JSON.stringify(this.data));
    }

    /**
     * 部件创建完毕
     *
     * @memberof EditFormControlBase
     */
    public ctrlCreated(): void {
        super.ctrlCreated();
        this.watchData();
        if (this.viewState) {
            this.viewStateEvent = this.viewState.subscribe((params: any) => {
                const { tag, action, data } = params;
                if (!Object.is(tag, this.name)) {
                    return;
                }
                if (Object.is('save', action)) {
                    this.save(data, data.showResultInfo);
                }
                if (Object.is('remove', action)) {
                    this.remove(data);
                }
                if (Object.is('saveandexit', action)) {
                    this.saveAndExit(data);
                }
                if (Object.is('saveandnew', action)) {
                    this.saveAndNew(data);
                }
                if (Object.is('removeandexit', action)) {
                    this.removeAndExit(data);
                }
            });
        }
        this.dataChang
            .pipe(
                debounceTime(300),
                distinctUntilChanged()
            ).subscribe((data: any) => {
                if (this.autosave) {
                    this.autoSave();
                }
                const state = !Object.is(JSON.stringify(this.oldData), JSON.stringify(this.data)) ? true : false;
                this.$store.commit('viewaction/setViewDataChange', { viewtag: this.viewtag, viewdatachange: state });
            });
        this.accLocalTags.push(this.$acc.commandLocal((data: any) => {
            if (data && this.data.srfkey === data.srfkey && (!data.___localUpdateDate || this.data.___localUpdateDate !== data.___localUpdateDate)) {
                const appview = this.$store.getters['viewaction/getAppView'](this.viewtag);
                if (appview && appview.viewdatachange) {
                    this.$Modal.confirm({
                        title: '数据已变更',
                        content: '数据已变更，是否刷新数据?',
                        onOk: () => {
                            this.refresh([{}]);
                        }
                    });
                } else {
                    this.refresh([{}]);
                }
            }
        }, 'update', this.appDeName.toUpperCase()));
    }

    /**
     * 监控表单属性变化
     *
     * @protected
     * @memberof EditFormControlBase
     */
    protected watchData(): void {
        for (const key in this.data) {
            if (this.data.hasOwnProperty(key)) {
                this.$watch(`data.${key}`, (newVal: any, oldVal: any) => {
                    this.formDataChange({ name: key, newVal, oldVal });
                });
            }
        }
    }

    /**
     * 表单加载完成
     *
     * @param {*} [data={}]
     * @param {string} action
     * @memberof EditFormControlBase
     */
    public onFormLoad(data: any = {}, action: string): void {
        // 更新context的实体主键
        if (data[this.appDeName]) {
            Object.assign(this.context, { [this.appDeName]: data[this.appDeName] })
        }
        // 更新上下文，当前数据视图数据
        Object.assign(this.context, { [`src${this.appDeName}`]: { data }, [`srfdatakey`]: `srf${this.appDeName}` });
        this.setFormEnableCond(data);
        this.fillForm(data, action);
        this.oldData = {};
        Object.assign(this.oldData, JSON.parse(JSON.stringify(this.data)));
        this.$store.commit('viewaction/setViewDataChange', { viewtag: this.viewtag, viewdatachange: false });
        this.formLogic({ name: '', newVal: null, oldVal: null });
    }

    /**
     * 表单项逻辑
     *
     * @param {{ name: string, newVal: any, oldVal: any }} { name, newVal, oldVal }
     * @memberof EditFormControlBase
     */
    public formLogic({ name, newVal, oldVal }: { name: string, newVal: any, oldVal: any }): void { }

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
        if (Object.is(action, 'loadDraft')) {
            this.createDefault();
        }
        if (Object.is(action, 'load')) {
            this.updateDefault();
        }
        this.$nextTick(() => {
            this.ignorefieldvaluechange = false;
        })
    }

    /**
     * 自动保存
     *
     * @param {*} [opt={}]
     * @returns {void}
     * @memberof EditFormControlBase
     */
    public autoSave(opt: any = {}): void {
        if (!this.formValidateStatus()) {
            return;
        }
        const arg: any = { ...opt };
        const data = this.getValues();
        Object.assign(arg, data);
        const action: any = Object.is(data.srfuf, '1') ? this.updateAction : this.createAction;
        if (!action) {
            let actionName: any = Object.is(data.srfuf, '1') ? "updateAction" : "createAction";
            this.$Notice.error({ title: '错误', desc: '${view.getName()}视图表单' + actionName + '参数未配置' });
            return;
        }
        Object.assign(arg, { viewparams: this.viewparams });
        const post: Promise<any> = this.service.add(action, JSON.parse(JSON.stringify(this.context)), arg, this.showBusyIndicator);
        post.then((response: any) => {
            if (!response.status || response.status !== 200) {
                if (response.data) {
                    this.$Notice.error({ title: '错误', desc: response.data.message });
                }
                return;
            }

            const data = response.data;
            this.onFormLoad(data, 'autoSave');
            this.$emit('save', data);
            this.$store.dispatch('viewaction/datasaved', { viewtag: this.viewtag });
            this.sendAccMessage(Object.is(data.srfuf, '1') ? 'update' : 'create');
            this.$nextTick(() => {
                this.formState.next({ type: 'save', data: data });
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

    /**
     * 保存
     *
     * @param {*} [opt={}]
     * @param {boolean} [showResultInfo]
     * @param {boolean} [ifStateNext=true] formState是否下发通知
     * @returns {Promise<any>}
     * @memberof EditFormControlBase
     */
    public async save(opt: any = {}, showResultInfo?: boolean, ifStateNext: boolean = true): Promise<any> {
        return new Promise((resolve: any, reject: any) => {
            showResultInfo = showResultInfo === undefined ? true : false;
            if (!this.formValidateStatus()) {
                this.$Notice.error({ title: '错误', desc: '值规则校验异常' });
                return;
            }
            const arg: any = { ...opt };
            const data = this.getValues();
            Object.assign(arg, data);
            Object.assign(arg, this.context);
            if (ifStateNext && this.drCount > 0) {
                this.drsaveopt = opt;
                this.formState.next({ type: 'beforesave', data: arg });//先通知关系界面保存
                this.saveState = resolve;
                return;
            }
            const action: any = Object.is(data.srfuf, '1') ? this.updateAction : this.createAction;
            if (!action) {
                let actionName: any = Object.is(data.srfuf, '1') ? "updateAction" : "createAction";
                this.$Notice.error({ title: '错误', desc: '${view.getName()}视图表单' + actionName + '参数未配置' });
                return;
            }
            Object.assign(arg, { viewparams: this.viewparams });
            const post: Promise<any> = Object.is(data.srfuf, '1') ? this.service.update(action, JSON.parse(JSON.stringify(this.context)), arg, this.showBusyIndicator) : this.service.add(action, JSON.parse(JSON.stringify(this.context)), arg, this.showBusyIndicator);
            post.then((response: any) => {
                if (!response.status || response.status !== 200) {
                    if (response.data) {
                        this.$Notice.error({ title: '错误', desc: response.data.message });
                    }
                    return;
                }

                const data = response.data;
                this.onFormLoad(data, 'save');
                this.$emit('save', data);
                this.$store.dispatch('viewaction/datasaved', { viewtag: this.viewtag });
                this.sendAccMessage(Object.is(data.srfuf, '1') ? 'update' : 'create');
                this.$nextTick(() => {
                    this.formState.next({ type: 'save', data: data });
                });
                resolve(response);
            }).catch((response: any) => {
                if (response && response.status && response.data) {
                    this.$Notice.error({ title: '错误', desc: response.data.message });
                    reject(response);
                    return;
                }
                if (!response || !response.status || !response.data) {
                    this.$Notice.error({ title: '错误', desc: '系统异常' });
                    reject(response);
                    return;
                }
                reject(response);
            });
        })
    }

    /**
     * 删除
     *
     * @param {Array<any>} [opt=[]]
     * @param {boolean} [showResultInfo]
     * @returns {Promise<any>}
     * @memberof EditFormControlBase
     */
    public remove(opt: Array<any> = [], showResultInfo?: boolean): Promise<any> {
        return new Promise((resolve: any, reject: any) => {
            if (!this.removeAction) {
                this.$Notice.error({ title: '错误', desc: '${view.getName()}视图表单removeAction参数未配置' });
                return;
            }
            const arg: any = opt[0];
            const _this: any = this;
            Object.assign(arg, { viewparams: this.viewparams });
            this.service.delete(_this.removeAction, JSON.parse(JSON.stringify(this.context)), arg, showResultInfo).then((response: any) => {
                if (response) {
                    const data = response.data;
                    this.$emit('remove', data);
                    this.formState.next({ type: 'remove', data: data });
                    this.data.ismodify = false;
                    this.$Notice.success({ title: '', desc: (data.srfmajortext ? data.srfmajortext : '') + '&nbsp;删除成功！' });
                    resolve(response);
                }
            }).catch((error: any) => {
                const { data: _data } = error;
                this.$Notice.error({ title: _data.title, desc: _data.message });
                reject(error);
            });
        });
    }

    /**
     * 工作流启动
     *
     * @param {*} data
     * @param {*} [localdata]
     * @returns {Promise<any>}
     * @memberof EditFormControlBase
     */
    public async wfstart(data: any, localdata?: any): Promise<any> {
        return new Promise((resolve: any, reject: any) => {
            const _this: any = this;
            const post: Promise<any> = _this.save({}, false);
            post.then((response: any) => {
                const arg: any = response.data;
                if (this.viewparams) {
                    Object.assign(arg, { viewparams: this.viewparams });
                }
                const result: Promise<any> = this.service.wfstart(_this.WFStartAction, JSON.parse(JSON.stringify(this.context)), arg, this.showBusyIndicator, localdata);
                result.then((response: any) => {
                    if (!response || response.status !== 200) {
                        if (response.data) {
                            this.$Notice.error({ title: '', desc: '工作流启动失败, ' + response.data.message });
                        }
                        return;
                    }
                    this.$Notice.info({ title: '', desc: '工作流启动成功' });
                    resolve(response);
                }).catch((response: any) => {
                    if (response && response.status && response.data) {
                        this.$Notice.error({ title: '错误', desc: response.data.message });
                        reject(response);
                        return;
                    }
                    if (!response || !response.status || !response.data) {
                        this.$Notice.error({ title: '错误', desc: '系统异常' });
                        reject(response);
                        return;
                    }
                    reject(response);
                });
            }).catch((response: any) => {
                if (response && response.status && response.data) {
                    this.$Notice.error({ title: '错误', desc: response.data.message });
                    reject(response);
                    return;
                }
                if (!response || !response.status || !response.data) {
                    this.$Notice.error({ title: '错误', desc: '系统异常' });
                    reject(response);
                    return;
                }
                reject(response);
            })
        });
    }

    /**
     * 工作流提交
     *
     * @param {*} data
     * @param {*} [localdata]
     * @returns {Promise<any>}
     * @memberof EditFormControlBase
     */
    public async wfsubmit(data: any, localdata?: any): Promise<any> {
        return new Promise((resolve: any, reject: any) => {
            const _this: any = this;
            const arg: any = data[0];
            Object.assign(arg, { viewparams: this.viewparams });
            //     if (!arg.${ ctrl.getPSAppDataEntity().getCodeName() ? lower_case} || Object.is(arg.${ ctrl.getPSAppDataEntity().getCodeName() ? lower_case}, '')) {
            //     return;
            // }
            const post: Promise<any> = Object.is(arg.srfuf, '1') ? this.service.update(this.updateAction, JSON.parse(JSON.stringify(this.context)), arg, this.showBusyIndicator) : this.service.add(this.createAction, JSON.parse(JSON.stringify(this.context)), arg, this.showBusyIndicator);
            post.then((response: any) => {
                const arg: any = response.data;
                // 保存完成UI处理
                this.onFormLoad(arg, 'save');
                this.$emit('save', arg);
                this.$nextTick(() => {
                    this.formState.next({ type: 'save', data: arg });
                });
                // 准备提交参数
                if (this.viewparams) {
                    Object.assign(arg, { viewparams: this.viewparams });
                }
                // 强制补充srfwfmemo
                if (this.srfwfmemo) {
                    Object.assign(arg, { srfwfmemo: this.srfwfmemo });
                }
                const result: Promise<any> = this.service.wfsubmit(_this.WFSubmitAction, JSON.parse(JSON.stringify(this.context)), arg, this.showBusyIndicator, localdata);
                result.then((response: any) => {
                    if (!response || response.status !== 200) {
                        if (response.data) {
                            this.$Notice.error({ title: '', desc: '工作流提交失败, ' + response.data.message });
                        }
                        return;
                    }
                    this.onFormLoad(arg, 'submit');
                    this.$store.dispatch('viewaction/datasaved', { viewtag: this.viewtag });
                    this.$Notice.info({ title: '', desc: '工作流提交成功' });
                    resolve(response);
                }).catch((response: any) => {
                    if (response && response.status && response.data) {
                        this.$Notice.error({ title: '错误', desc: response.data.message });
                        reject(response);
                        return;
                    }
                    if (!response || !response.status || !response.data) {
                        this.$Notice.error({ title: '错误', desc: '系统异常' });
                        reject(response);
                        return;
                    }
                    reject(response);
                });
            }).catch((response: any) => {
                if (response && response.status && response.data) {
                    this.$Notice.error({ title: '错误', desc: response.data.message });
                    reject(response);
                    return;
                }
                if (!response || !response.status || !response.data) {
                    this.$Notice.error({ title: '错误', desc: '系统异常' });
                    reject(response);
                    return;
                }
                reject(response);
            })
        })
    }

    /**
     * 表单项更新
     *
     * @param {string} mode
     * @param {*} [data={}]
     * @param {string[]} updateDetails
     * @param {boolean} [showloading]
     * @returns {void}
     * @memberof EditFormControlBase
     */
    public updateFormItems(mode: string, data: any = {}, updateDetails: string[], showloading?: boolean): void {
        if (!mode || (mode && Object.is(mode, ''))) {
            return;
        }
        const arg: any = Object.assign(this.viewparams, data);
        const post: Promise<any> = this.service.frontLogic(mode, this.context, data, showloading);
        post.then((response: any) => {
            if (!response || response.status !== 200) {
                this.$Notice.error({ title: '错误', desc: '表单项更新失败' });
                return;
            }
            const data = response.data;
            const _data: any = {};
            updateDetails.forEach((name: string) => {
                if (!data.hasOwnProperty(name)) {
                    return;
                }
                Object.assign(_data, { [name]: data[name] });
            });
            this.setFormEnableCond(_data);
            this.fillForm(_data, 'updateFormItem');
            // this.formLogic({ name: '', newVal: null, oldVal: null });
            this.dataChang.next(JSON.stringify(this.data));
            this.$nextTick(() => {
                this.formState.next({ type: 'updateformitem', ufimode: arg.srfufimode, data: _data });
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

    /**
     * 重置表单项值
     *
     * @param {{ name: string, newVal: any, oldVal: any }} { name, newVal, oldVal }
     * @memberof EditFormControlBase
     */
    public resetFormData({ name, newVal, oldVal }: { name: string, newVal: any, oldVal: any }): void { }

    /**
     * 保存并退出
     *
     * @param {any[]} data
     * @returns {Promise<any>}
     * @memberof FormControlBase
     */
    public saveAndExit(data: any[]): Promise<any> {
        return new Promise((resolve: any, reject: any) => {
            let arg: any = {};
            if (data && data.length > 0) {
                Object.assign(arg, data[0]);
            }
            this.currentAction = "saveAndExit";
            this.save([arg]).then((res) => {
                if (res) {
                    this.closeView(res.data);
                }
                resolve(res);
            }).catch((error) => {
                reject(error);
            })
        })
    }

    /**
     * 保存并新建
     *
     * @param {any[]} data
     * @returns {Promise<any>}
     * @memberof FormControlBase
     */
    public saveAndNew(data: any[]): Promise<any> {
        return new Promise((resolve: any, reject: any) => {
            let arg: any = {};
            if (data && data.length > 0) {
                Object.assign(arg, data[0]);
            }
            this.currentAction = "saveAndNew";
            this.save([arg]).then((res: any) => {
                this.ResetData(res);
                this.loadDraft({});
            }).catch((error) => {
                reject(error);
            })
        })
    }

    /**
     * 删除并退出
     *
     * @param {any[]} data
     * @returns {Promise<any>}
     * @memberof FormControlBase
     */
    public removeAndExit(data: any[]): Promise<any> {
        return new Promise((resolve: any, reject: any) => {
            let arg: any = {};
            if (data && data.length > 0) {
                Object.assign(arg, data[0]);
            }
            this.remove([arg]).then((res: any) => {
                if (res) {
                    this.closeView(res.data);
                }
                resolve(res);
            }).catch((error) => {
                reject(error);
            })
        })
    }

    /**
     * 关系界面数据保存完成
     *
     * @param {*} $event
     * @returns
     * @memberof FormControlBase
     */
    public drdatasaved($event: any) {
        this.drcounter--;
        if (this.drcounter > 0) {
            return;
        }
        this.save(this.drsaveopt, undefined, false).then((res) => {
            this.saveState(res);
            this.drsaveopt = {};
            if (Object.is(this.currentAction, "saveAndNew")) {
                this.ResetData(res);
                this.loadDraft({});
            } else if (Object.is(this.currentAction, "saveAndExit")) {
                if (res) {
                    this.closeView(res.data);
                }
            }
        });
    }

    /**
     * 向消息中中心发送数据变更指令
     *
     * @protected
     * @param {('update' | 'create' | 'remove')} type
     * @memberof EditFormControlBase
     */
    protected sendAccMessage(type: 'update' | 'create' | 'remove'): void {
        this.data.___localUpdateDate = new Date().getTime();
        this.$acc.send[type](this.data, this.appDeName.toUpperCase());
    }

}