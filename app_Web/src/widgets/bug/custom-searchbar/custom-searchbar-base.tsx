import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool,Util,ViewTool } from '@/utils';
import { Watch, MainControlBase } from '@/studio-core';
import BugService from '@/service/bug/bug-service';
import CustomService from './custom-searchbar-service';
import BugUIService from '@/uiservice/bug/bug-ui-service';
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
     * @type {BugService}
     * @memberof CustomSearchbarBase
     */
    public appEntityService: BugService = new BugService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof CustomSearchbarBase
     */
    protected appDeName: string = 'bug';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof CustomSearchbarBase
     */
    protected appDeLogicName: string = 'Bug';

    /**
     * 界面UI服务对象
     *
     * @type {BugUIService}
     * @memberof CustomBase
     */  
    public appUIService:BugUIService = new BugUIService(this.$store);


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
        'ideq': {
            label: 'Bug编号',
            name: 'ideq',
            prop: 'id',
            mode: 'EQ',
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
        'brancheq': {
            label: '平台/分支',
            name: 'brancheq',
            prop: 'branch',
            mode: 'EQ',
            disabled: false
        },
        'branchnameeq': {
            label: '平台/分支',
            name: 'branchnameeq',
            prop: 'branchname',
            mode: 'EQ',
            disabled: false
        },
        'branchnamelike': {
            label: '平台/分支',
            name: 'branchnamelike',
            prop: 'branchname',
            mode: 'LIKE',
            disabled: false
        },
        'browsereq': {
            label: '浏览器',
            name: 'browsereq',
            prop: 'browser',
            mode: 'EQ',
            disabled: false
        },
        'buildprojecteq': {
            label: '版本项目',
            name: 'buildprojecteq',
            prop: 'buildproject',
            mode: 'EQ',
            disabled: false
        },
        'caseeq': {
            label: '相关用例',
            name: 'caseeq',
            prop: 'ibizcase',
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
        'coloreq': {
            label: '标题颜色',
            name: 'coloreq',
            prop: 'color',
            mode: 'EQ',
            disabled: false
        },
        'confirmedeq': {
            label: '是否确认',
            name: 'confirmedeq',
            prop: 'confirmed',
            mode: 'EQ',
            disabled: false
        },
        'tasknameeq': {
            label: '相关任务',
            name: 'tasknameeq',
            prop: 'taskname',
            mode: 'EQ',
            disabled: false
        },
        'deadlinegteq': {
            label: '截止日期',
            name: 'deadlinegteq',
            prop: 'deadline',
            mode: 'GTANDEQ',
            disabled: false
        },
        'deadlinelt': {
            label: '截止日期',
            name: 'deadlinelt',
            prop: 'deadline',
            mode: 'LT',
            disabled: false
        },
        'deadlinelteq': {
            label: '截止日期',
            name: 'deadlinelteq',
            prop: 'deadline',
            mode: 'LTANDEQ',
            disabled: false
        },
        'duplicatebugeq': {
            label: '重复ID',
            name: 'duplicatebugeq',
            prop: 'duplicatebug',
            mode: 'EQ',
            disabled: false
        },
        'entryeq': {
            label: '应用',
            name: 'entryeq',
            prop: 'entry',
            mode: 'EQ',
            disabled: false
        },
        'lasteditedbyeq': {
            label: '最后修改者',
            name: 'lasteditedbyeq',
            prop: 'lasteditedby',
            mode: 'EQ',
            disabled: false
        },
        'moduleeq': {
            label: '所属模块',
            name: 'moduleeq',
            prop: 'module',
            mode: 'EQ',
            disabled: false
        },
        'modulenameeq': {
            label: '模块名称',
            name: 'modulenameeq',
            prop: 'modulename',
            mode: 'EQ',
            disabled: false
        },
        'modulenamelike': {
            label: '模块名称',
            name: 'modulenamelike',
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
        'oseq': {
            label: '操作系统',
            name: 'oseq',
            prop: 'os',
            mode: 'EQ',
            disabled: false
        },
        'overduebugslt': {
            label: '过期天数',
            name: 'overduebugslt',
            prop: 'overduebugs',
            mode: 'LT',
            disabled: false
        },
        'planeq': {
            label: '所属计划',
            name: 'planeq',
            prop: 'plan',
            mode: 'EQ',
            disabled: false
        },
        'prieq': {
            label: '优先级',
            name: 'prieq',
            prop: 'pri',
            mode: 'EQ',
            disabled: false
        },
        'producteq': {
            label: '所属产品',
            name: 'producteq',
            prop: 'product',
            mode: 'EQ',
            disabled: false
        },
        'productnameeq': {
            label: '产品',
            name: 'productnameeq',
            prop: 'productname',
            mode: 'EQ',
            disabled: false
        },
        'productnamelike': {
            label: '产品',
            name: 'productnamelike',
            prop: 'productname',
            mode: 'LIKE',
            disabled: false
        },
        'projecteq': {
            label: '所属项目',
            name: 'projecteq',
            prop: 'project',
            mode: 'EQ',
            disabled: false
        },
        'projectnameeq': {
            label: '项目',
            name: 'projectnameeq',
            prop: 'projectname',
            mode: 'EQ',
            disabled: false
        },
        'projectnamelike': {
            label: '项目',
            name: 'projectnamelike',
            prop: 'projectname',
            mode: 'LIKE',
            disabled: false
        },
        'repoeq': {
            label: '代码',
            name: 'repoeq',
            prop: 'repo',
            mode: 'EQ',
            disabled: false
        },
        'resolutioneq': {
            label: '解决方案',
            name: 'resolutioneq',
            prop: 'resolution',
            mode: 'EQ',
            disabled: false
        },
        'resolvedbuildeq': {
            label: '解决版本',
            name: 'resolvedbuildeq',
            prop: 'resolvedbuild',
            mode: 'EQ',
            disabled: false
        },
        'resolvedbyeq': {
            label: '解决者',
            name: 'resolvedbyeq',
            prop: 'resolvedby',
            mode: 'EQ',
            disabled: false
        },
        'resolveddatelteq': {
            label: '解决日期',
            name: 'resolveddatelteq',
            prop: 'resolveddate',
            mode: 'LTANDEQ',
            disabled: false
        },
        'severityeq': {
            label: '严重程度',
            name: 'severityeq',
            prop: 'severity',
            mode: 'EQ',
            disabled: false
        },
        'statuseq': {
            label: 'Bug状态',
            name: 'statuseq',
            prop: 'status',
            mode: 'EQ',
            disabled: false
        },
        'statusnoteq': {
            label: 'Bug状态',
            name: 'statusnoteq',
            prop: 'status',
            mode: 'NOTEQ',
            disabled: false
        },
        'storyeq': {
            label: '相关需求',
            name: 'storyeq',
            prop: 'story',
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
        'taskeq': {
            label: '相关任务',
            name: 'taskeq',
            prop: 'task',
            mode: 'EQ',
            disabled: false
        },
        'tasknamelike': {
            label: '相关任务',
            name: 'tasknamelike',
            prop: 'taskname',
            mode: 'LIKE',
            disabled: false
        },
        'testtaskeq': {
            label: '测试单',
            name: 'testtaskeq',
            prop: 'testtask',
            mode: 'EQ',
            disabled: false
        },
        'titlelike': {
            label: 'Bug标题',
            name: 'titlelike',
            prop: 'title',
            mode: 'LIKE',
            disabled: false
        },
        'tostoryeq': {
            label: '转需求',
            name: 'tostoryeq',
            prop: 'tostory',
            mode: 'EQ',
            disabled: false
        },
        'totaskeq': {
            label: '转任务',
            name: 'totaskeq',
            prop: 'totask',
            mode: 'EQ',
            disabled: false
        },
        'typeeq': {
            label: 'Bug类型',
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
    public appdeName: string = 'Bug';

    /**
     * modleId
     *
     * @type {string}
     * @memberof CustomBase
     */
    public modelId: string = "searchbar_bug_custom";

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