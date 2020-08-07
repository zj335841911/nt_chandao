import { Subject } from 'rxjs';
import { EditView9Base } from '@/studio-core';
import TestRunService from '@/service/test-run/test-run-service';
import TestRunAuthService from '@/authservice/test-run/test-run-auth-service';
import TestRunUIService from '@/uiservice/test-run/test-run-ui-service';

/**
 * 测试运行多表单编辑视图视图基类
 *
 * @export
 * @class TestRunMEditView9Base
 * @extends {EditView9Base}
 */
export class TestRunMEditView9Base extends EditView9Base {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof TestRunMEditView9Base
     */
    protected appDeName: string = 'testrun';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof TestRunMEditView9Base
     */
    protected appDeKey: string = 'id';
// 应用实体「TestRun」未设置主文本属性

    /**
     * 实体服务对象
     *
     * @type {TestRunService}
     * @memberof TestRunMEditView9Base
     */
    protected appEntityService: TestRunService = new TestRunService;

    /**
     * 实体权限服务对象
     *
     * @type TestRunUIService
     * @memberof TestRunMEditView9Base
     */
    public appUIService: TestRunUIService = new TestRunUIService(this.$store);


    /**
     * 计数器服务对象集合
     *
     * @protected
     * @type {Array<*>}
     * @memberof TestRunMEditView9Base
     */    
    protected counterServiceArray: Array<any> = [];

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof TestRunMEditView9Base
     */
    protected model: any = {
        srfCaption: 'entities.testrun.views.meditview9.caption',
        srfTitle: 'entities.testrun.views.meditview9.title',
        srfSubTitle: 'entities.testrun.views.meditview9.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof TestRunMEditView9Base
     */
    protected containerModel: any = {
        view_meditviewpanel: { name: 'meditviewpanel', type: 'MULTIEDITVIEWPANEL' },
    };


	/**
     * 视图唯一标识
     *
     * @protected
     * @type {string}
     * @memberof ViewBase
     */
	protected viewtag: string = '43a086ef952c56ebce8a14743f5157d6';


    /**
     * 引擎初始化
     *
     * @public
     * @memberof TestRunMEditView9Base
     */
    public engineInit(): void {
    }

    /**
     * 打开新建数据视图
     *
     * @param {any[]} args
     * @param {*} [params]
     * @param {*} [fullargs]
     * @param {*} [$event]
     * @param {*} [xData]
     * @memberof TestRunMEditView9
     */
    public newdata(args: any[],fullargs?:any[], params?: any, $event?: any, xData?: any) {
        let localContext:any = null;
        let localViewParam:any =null;
    this.$Notice.warning({ title: '错误', desc: '未指定关系视图' });
    }


    /**
     * 打开编辑数据视图
     *
     * @param {any[]} args
     * @param {*} [params]
     * @param {*} [fullargs]
     * @param {*} [$event]
     * @param {*} [xData]
     * @memberof TestRunMEditView9
     */
    public opendata(args: any[],fullargs?:any[],params?: any, $event?: any, xData?: any) {
    this.$Notice.warning({ title: '错误', desc: '未指定关系视图' });
    }




    /**
     * 视图上下文变化
     *
     * @protected
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof TestRunMEditView9Base
     */
    protected viewDataChange(newVal: any, oldVal: any): void {
        this.viewState.next({ tag: 'meditviewpanel', action: 'load', data: this.context });
    }


}