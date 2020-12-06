import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool, Util, ViewTool } from '@/utils';
import { Watch, MainControlBase } from '@/studio-core';
import TaskService from '@/service/task/task-service';
import CustomService from './custom-searchbar-service';
import TaskUIService from '@/uiservice/task/task-ui-service';
import moment from 'moment';

/**
 * searchbar部件基类
 *
 * @export
 * @class MainControlBase
 * @extends {CustomSearchbarBase}
 */
export class CustomSearchbarBase extends MainControlBase {
    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof CustomSearchbarBase
     */
    protected controlType: string = 'SEARCHBAR';

    /**
     * 建构部件服务对象
     *
     * @type {CustomService}
     * @memberof CustomSearchbarBase
     */
    public service: CustomService = new CustomService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {TaskService}
     * @memberof CustomSearchbarBase
     */
    public appEntityService: TaskService = new TaskService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof CustomSearchbarBase
     */
    protected appDeName: string = 'task';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof CustomSearchbarBase
     */
    protected appDeLogicName: string = '任务';

    /**
     * 界面UI服务对象
     *
     * @type {TaskUIService}
     * @memberof CustomBase
     */  
    public appUIService: TaskUIService = new TaskUIService(this.$store);


    /**
     * 过滤属性集合
     *
     * @type {*}
     * @memberof CustomBase
     */
    get filterFields() {
        return Object.values(this.detailsModel);
    }

    /**
     * 过滤属性模型集合
     *
     * @type {*}
     * @memberof CustomBase
     */
    public detailsModel: any = {
        'idnoteq': {
            label: '编号',
            name: 'idnoteq',
            prop: 'id',
            mode: 'NOTEQ',
            disabled: false
        },
        'namelike': {
            label: '任务名称',
            name: 'namelike',
            prop: 'name',
            mode: 'LIKE',
            disabled: false
        },
        'assigneddategteq': {
            label: '指派日期',
            name: 'assigneddategteq',
            prop: 'assigneddate',
            mode: 'GTANDEQ',
            disabled: false
        },
        'assignedtoeq': {
            label: '指派给',
            name: 'assignedtoeq',
            prop: 'assignedto',
            mode: 'EQ',
            disabled: false
        },
        'assignedtoin': {
            label: '指派给',
            name: 'assignedtoin',
            prop: 'assignedto',
            mode: 'IN',
            disabled: false
        },
        'canceledbyeq': {
            label: '由谁取消',
            name: 'canceledbyeq',
            prop: 'canceledby',
            mode: 'EQ',
            disabled: false
        },
        'closedbyeq': {
            label: '由谁关闭',
            name: 'closedbyeq',
            prop: 'closedby',
            mode: 'EQ',
            disabled: false
        },
        'closeddatelteq': {
            label: '关闭时间',
            name: 'closeddatelteq',
            prop: 'closeddate',
            mode: 'LTANDEQ',
            disabled: false
        },
        'closedreasoneq': {
            label: '关闭原因',
            name: 'closedreasoneq',
            prop: 'closedreason',
            mode: 'EQ',
            disabled: false
        },
        'coloreq': {
            label: '标题颜色',
            name: 'coloreq',
            prop: 'color',
            mode: 'EQ',
            disabled: false
        },
        'eststartedgteq': {
            label: '预计开始',
            name: 'eststartedgteq',
            prop: 'eststarted',
            mode: 'GTANDEQ',
            disabled: false
        },
        'eststartedlteq': {
            label: '预计开始',
            name: 'eststartedlteq',
            prop: 'eststarted',
            mode: 'LTANDEQ',
            disabled: false
        },
        'finishedbyeq': {
            label: '由谁完成',
            name: 'finishedbyeq',
            prop: 'finishedby',
            mode: 'EQ',
            disabled: false
        },
        'finisheddatelteq': {
            label: '实际完成',
            name: 'finisheddatelteq',
            prop: 'finisheddate',
            mode: 'LTANDEQ',
            disabled: false
        },
        'frombugeq': {
            label: '来源Bug',
            name: 'frombugeq',
            prop: 'frombug',
            mode: 'EQ',
            disabled: false
        },
        'lasteditedbyeq': {
            label: '最后修改',
            name: 'lasteditedbyeq',
            prop: 'lasteditedby',
            mode: 'EQ',
            disabled: false
        },
        'modulenameeq': {
            label: '所属模块',
            name: 'modulenameeq',
            prop: 'modulename',
            mode: 'EQ',
            disabled: false
        },
        'mudulenamelike': {
            label: '所属模块',
            name: 'mudulenamelike',
            prop: 'modulename',
            mode: 'LIKE',
            disabled: false
        },
        'openedbyeq': {
            label: '由谁创建',
            name: 'openedbyeq',
            prop: 'openedby',
            mode: 'EQ',
            disabled: false
        },
        'parentnameeq': {
            label: '父任务',
            name: 'parentnameeq',
            prop: 'parentname',
            mode: 'EQ',
            disabled: false
        },
        'parentnamelike': {
            label: '父任务',
            name: 'parentnamelike',
            prop: 'parentname',
            mode: 'LIKE',
            disabled: false
        },
        'pathlike': {
            label: '模块路径',
            name: 'pathlike',
            prop: 'path',
            mode: 'LIKE',
            disabled: false
        },
        'prieq': {
            label: '优先级',
            name: 'prieq',
            prop: 'pri',
            mode: 'EQ',
            disabled: false
        },
        'priin': {
            label: '优先级',
            name: 'priin',
            prop: 'pri',
            mode: 'IN',
            disabled: false
        },
        'producteq': {
            label: '产品',
            name: 'producteq',
            prop: 'product',
            mode: 'EQ',
            disabled: false
        },
        'projectnameeq': {
            label: '所属项目',
            name: 'projectnameeq',
            prop: 'projectname',
            mode: 'EQ',
            disabled: false
        },
        'projectnamelike': {
            label: '所属项目',
            name: 'projectnamelike',
            prop: 'projectname',
            mode: 'LIKE',
            disabled: false
        },
        'status1eq': {
            label: '任务状态',
            name: 'status1eq',
            prop: 'status1',
            mode: 'EQ',
            disabled: false
        },
        'storynameeq': {
            label: '相关需求',
            name: 'storynameeq',
            prop: 'storyname',
            mode: 'EQ',
            disabled: false
        },
        'storynamelike': {
            label: '相关需求',
            name: 'storynamelike',
            prop: 'storyname',
            mode: 'LIKE',
            disabled: false
        },
        'tasktypeeq': {
            label: '任务类型',
            name: 'tasktypeeq',
            prop: 'tasktype',
            mode: 'EQ',
            disabled: false
        },
        'typeeq': {
            label: '任务类型',
            name: 'typeeq',
            prop: 'type',
            mode: 'EQ',
            disabled: false
        },
    };

    /**
     * 过滤项集合
     *
     * @type {*}
     * @memberof CustomBase
     */
    public filterItems: any[] = [];

    /**
     * 应用实体名称
     *
     * @type {string}
     * @memberof CustomBase
     */
    public appdeName: string = 'Task';

    /**
     * modleId
     *
     * @type {string}
     * @memberof CustomBase
     */
    public modelId: string = "searchbar_task_custom";

    /**
     * 功能服务名称
     *
     * @type {string}
     * @memberof CustomBase
     */
    public utilServiceName: string = "";

    /**
     * 历史记录
     *
     * @type {string}
     * @memberof CustomBase
     */
    protected historyItems: any[] = [];

    /**
     * 选中记录
     *
     * @type {string}
     * @memberof CustomBase
     */
    protected selectItem: any = null;

    /**
     * 存储项名称
     *
     * @type {string}
     * @memberof CustomBase
     */
    protected saveItemName: string = '';

    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof CustomBase
     */
    public getDatas(): any[] {
        return [];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof CustomBase
     */
    public getData(): any {
        let data: any = {};
        if(this.filterFields.length > 0) {
            let filter: any = this.getFilter();
            Object.assign(data, { filter: filter ? filter : null })
        }
        return data;
    }

    /**
     * 获取filter
     *
     * @return {*}
     * @memberof CustomBase
     */
    public getFilter(): any {
        if(this.filterItems.length === 0) {
            return null;
        }
        let ands: any[] = this.transformAnd(this.filterItems);
        this.transformResult(ands, '$and');
        if(ands.length === 0) {
            return null;
        }
        return { '$and': ands };
    }

    /**
     * 处理结果集
     *
     * @return {*}
     * @memberof CustomBase
     */
    public transformResult(datas: any[], pName: string) {
        let items: any[] = [];
        for(let i = datas.length - 1; i >= 0; i--) {
            let data: any = datas[i];
            let field: string = Object.is(pName, '$and') ? '$or' : '$and';
            if(data.hasOwnProperty(field)) {
                items.push(data);
                datas.splice(i, 1);
                this.transformResult(data[field], field);
            }

        }
        if(items.length > 0) {
            let item: any = {};
            item[pName] = items;
            datas.push(item);
        }
    }

    /**
     * 处理并且逻辑
     *
     * @return {*}
     * @memberof CustomBase
     */
    public transformAnd(datas: any[]): any {
        let result: any[] = [];
        datas.forEach((data: any) => {
            let item: any = {};
            if(data.field && data.mode) {
                item[data.field] = {};
                let valField: string = data.editor ? data.editor : data.field;
                item[data.field][data.mode] = (data[valField] == null  ? '' : data[valField]);
                result.push(item)
            } else if(Object.is(data.label, '$and')) {
                let items: any[] = this.transformAnd(data.children);
                result = [...result, ...items];
            } else if(Object.is(data.label, '$or')) {
                item[data.label] = this.transformOr(data.children);
                result.push(item)
            }
        })
        return result;
    }

    /**
     * 处理或逻辑
     *
     * @return {*}
     * @memberof CustomBase
     */
    public transformOr(datas: any[]) {
        let result: any[] = [];
        datas.forEach((data: any) => {
            let item: any = {};
            if(data.field && data.mode) {
                item[data.field] = {};
                let valField: string = data.editor ? data.editor : data.field;
                item[data.field][data.mode] = (data[valField] == null ? '' : data[valField]);
                result.push(item);
            } else if(Object.is(data.label, '$and')) {
                item[data.label] = this.transformAnd(data.children);
                result.push(item)
            } else if(Object.is(data.label, '$or')) {
                item[data.label] = this.transformOr(data.children);
                result.push(item);
            }
        })
        return result;
    }

    /**
     * Vue声明周期(处理组件的输入属性)
     *
     * @memberof CustomBase
     */
    public created(): void {
        if (this.viewState) {
            this.viewStateEvent = this.viewState.subscribe(({ tag, action, data }) => {
                if (Object.is('load', action)) {
                    this.load(data);
                }
            });
        }
    }

    /**
     * 删除过滤项
     *
     * @return {*}
     * @memberof CustomBase
     */
    public onRemove(index: number) {
        this.filterItems.splice(index, 1);
    } 

    /**
     * 搜索
     *
     * @return {*}
     * @memberof CustomBase
     */
    public onSearch() {
        this.$emit('search', this.getData());
    }

    /**
     * 保存
     *
     * @return {*}
     * @memberof CustomBase
     */
    public onSave(name?: string) {
        let time = moment();
        this.historyItems.push({
            name: (name ? name : time.format('YYYY-MM-DD HH:mm:ss')),
            value: time.unix().toString(),
            data: JSON.parse(JSON.stringify(this.filterItems))
        })
        this.selectItem = time.unix().toString();

        let param: any = {};
		Object.assign(param, {
            model: JSON.parse(JSON.stringify(this.historyItems)),
            appdeName: this.appdeName,
            modelid: this.modelId,
            utilServiceName: this.utilServiceName,
			...this.viewparams
		});
		let post = this.service.saveModel(this.utilServiceName, this.context, param);
		post.then((response: any) => {
			this.$emit("save", response.data);
		}).catch((response: any) => {
			console.log(response);
		});
    }

    /**
     * 重置
     *
     * @return {*}
     * @memberof CustomBase
     */
    public onReset() {
        this.filterItems = [];
    }

    /**
     * 加载
     *
     * @return {*}
     * @memberof CustomBase
     */
    public load(data: any) {
        let param: any = {};
        Object.assign(param, {
            appdeName: this.appdeName,
            modelid: this.modelId,
            utilServiceName: this.utilServiceName,
            ...this.viewparams
        });
        let post = this.service.loadModel(this.utilServiceName, this.context, param);
		post.then((response: any) => {
			if(response.status == 200) {
                this.historyItems = response.data;
			}
		}).catch((response: any) => {
			console.log(response);
		});
    }

    /**
     * 改变过滤条件
     *
     * @return {*}
     * @memberof CustomBase
     */
    public onFilterChange(evt: any) {
        let item: any = this.historyItems.find((item: any) => Object.is(evt, item.value));
        if(item) {
            this.filterItems = JSON.parse(JSON.stringify(item.data));
        }
    }

    /**
     * 打开弹框
     *
     * @return {*}
     * @memberof CustomBase
     */
    public openPoper() {
        this.saveItemName = '';
    }

    /**
     * 确定
     *
     * @return {*}
     * @memberof CustomBase
     */
    public onOk() {
        let propip: any = this.$refs.propip;
        propip.handleMouseleave();
        this.onSave(this.saveItemName);
    }

    /**
     * 取消设置
     *
     * @return {*}
     * @memberof CustomBase
     */
    public onCancel() {
        let propip: any = this.$refs.propip;
        propip.handleMouseleave();
        this.onSave();
    }
}