import { Environment } from '@/environments/environment';
import { UIActionTool,Util } from '@/utils';
import UIService from '../ui-service';
import { Subject } from 'rxjs';
import IBIZPRO_INDEXService from '@/service/ibizpro-index/ibizpro-index-service';
import IBIZPRO_INDEXAuthService from '@/authservice/ibizpro-index/ibizpro-index-auth-service';

/**
 * 索引检索UI服务对象基类
 *
 * @export
 * @class IBIZPRO_INDEXUIServiceBase
 */
export default class IBIZPRO_INDEXUIServiceBase extends UIService {

    /**
     * 是否支持工作流
     * 
     * @memberof  IBIZPRO_INDEXUIServiceBase
     */
    public isEnableWorkflow:boolean = false;

    /**
     * 是否支持实体主状态
     * 
     * @memberof  IBIZPRO_INDEXUIServiceBase
     */
    public isEnableDEMainState:boolean = false;

    /**
     * 当前UI服务对应的数据服务对象
     * 
     * @memberof  IBIZPRO_INDEXUIServiceBase
     */
    public dataService:IBIZPRO_INDEXService = new IBIZPRO_INDEXService();

    /**
     * 所有关联视图
     * 
     * @memberof  IBIZPRO_INDEXUIServiceBase
     */ 
    public allViewMap: Map<string, Object> = new Map();

    /**
     * 状态值
     * 
     * @memberof  IBIZPRO_INDEXUIServiceBase
     */ 
    public stateValue: number = 0;

    /**
     * 状态属性
     * 
     * @memberof  IBIZPRO_INDEXUIServiceBase
     */ 
    public stateField: string = "";

    /**
     * 主状态属性集合
     * 
     * @memberof  IBIZPRO_INDEXUIServiceBase
     */  
    public mainStateFields:Array<any> = [];

    /**
     * 主状态集合Map
     * 
     * @memberof  IBIZPRO_INDEXUIServiceBase
     */  
    public allDeMainStateMap:Map<string,string> = new Map();

    /**
     * 主状态操作标识Map
     * 
     * @memberof  IBIZPRO_INDEXUIServiceBase
     */ 
    public allDeMainStateOPPrivsMap:Map<string,any> = new Map();

    /**
     * Creates an instance of  IBIZPRO_INDEXUIServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  IBIZPRO_INDEXUIServiceBase
     */
    constructor(opts: any = {}) {
        super(opts);
        this.authService = new IBIZPRO_INDEXAuthService(opts);
        this.initViewMap();
        this.initDeMainStateMap();
        this.initDeMainStateOPPrivsMap();
    }

    /**
     * 初始化视图Map
     * 
     * @memberof  IBIZPRO_INDEXUIServiceBase
     */  
    public initViewMap(){
        this.allViewMap.set('INDEXDEPICKUPVIEW:', {
            viewname: 'indexpickupview',
            srfappde: 'ibizpro_indices',
            component: 'ibizpro-indexindex-pickup-view',
            openmode: '',
            title: '索引检索',
            width: 0,
            height: 0
        });
        this.allViewMap.set('REDIRECTVIEW:', {
            viewname: 'redirectview',
            srfappde: 'ibizpro_indices',
            component: 'ibizpro-indexredirect-view',
            openmode: '',
            title: '索引检索',
            width: 0,
            height: 0
        });
        this.allViewMap.set(':', {
            viewname: 'dashboardview',
            srfappde: 'docs',
            component: 'doc-dashboard-view',
            openmode: 'DRAWER_TOP',
            title: '文档',
            width: 0,
            height: 0
        })
        this.allViewMap.set(':', {
            viewname: 'maintabexpview',
            srfappde: 'products',
            component: 'product-main-tab-exp-view',
            openmode: '',
            title: '产品',
            width: 0,
            height: 0
        })
        this.allViewMap.set(':', {
            viewname: 'maindashboardview',
            srfappde: 'tasks',
            component: 'task-main-dashboard-view',
            openmode: 'DRAWER_TOP',
            title: '任务',
            width: 1360,
            height: 0
        })
        this.allViewMap.set(':', {
            viewname: 'maintabexpview',
            srfappde: 'projects',
            component: 'project-main-tab-exp-view',
            openmode: '',
            title: '项目',
            width: 0,
            height: 0
        })
        this.allViewMap.set(':', {
            viewname: 'maindashboardview',
            srfappde: 'cases',
            component: 'case-main-dashboard-view',
            openmode: 'DRAWER_TOP',
            title: '功能测试',
            width: 0,
            height: 0
        })
        this.allViewMap.set(':bug', {
            viewname: 'maindashboardview',
            srfappde: 'bugs',
            component: 'bug-main-dashboard-view',
            openmode: 'DRAWER_TOP',
            title: 'Bug',
            width: 0,
            height: 0
        })
        this.allViewMap.set(':', {
            viewname: 'mainview',
            srfappde: 'stories',
            component: 'story-main-view',
            openmode: 'DRAWER_TOP',
            title: '需求',
            width: 0,
            height: 0
        })
    }

    /**
     * 初始化主状态集合
     * 
     * @memberof  IBIZPRO_INDEXUIServiceBase
     */  
    public initDeMainStateMap(){
    }

    /**
     * 初始化主状态操作标识
     * 
     * @memberof  IBIZPRO_INDEXUIServiceBase
     */  
    public initDeMainStateOPPrivsMap(){
    }


    /**
     * 获取指定数据的重定向页面
     * 
     * @param srfkey 数据主键
     * @param isEnableWorkflow  重定向视图是否需要处理流程中的数据
     * @memberof  IBIZPRO_INDEXUIServiceBase
     */
    public async getRDAppView(srfkey:string,isEnableWorkflow:boolean){
        this.isEnableWorkflow = isEnableWorkflow;
        // 进行数据查询
        let result:any = await this.dataService.Get({ibizpro_index:srfkey});
        const curData:any = result.data;
        //判断当前数据模式,默认为true，todo
        const iRealDEModel:boolean = true;

        let bDataInWF:boolean = false;
		let bWFMode:any = false;
		// 计算数据模式
		if (this.isEnableWorkflow) {
			bDataInWF = await this.dataService.testDataInWF({stateValue:this.stateValue,stateField:this.stateField},curData);
			if (bDataInWF) {
				bDataInWF = true;
				bWFMode = await this.dataService.testUserExistWorklist(null,curData);
			}
        }
        let strPDTViewParam:string = await this.getDESDDEViewPDTParam(curData, bDataInWF, bWFMode);
        //若不是当前数据模式，处理strPDTViewParam，todo

        //查找视图

        //返回视图
        return this.allViewMap.get(strPDTViewParam);
    }

    /**
	 * 获取实际的数据类型
     * 
     * @memberof  IBIZPRO_INDEXUIServiceBase
	 */
	public getRealDEType(entity:any){

    }

    /**
     * 获取实体单数据实体视图预定义参数
     * 
     * @param curData 当前数据
     * @param bDataInWF 是否有数据在工作流中
     * @param bWFMode   是否工作流模式
     * @memberof  IBIZPRO_INDEXUIServiceBase
     */
    public async getDESDDEViewPDTParam(curData:any, bDataInWF:boolean, bWFMode:boolean){
        let strPDTParam:string = '';
		if (bDataInWF) {
			// 判断数据是否在流程中
        }
        //多表单，todo
        const multiFormDEField:string|null ="indextype";

        if (multiFormDEField) {
			const objFormValue:string = curData[multiFormDEField];
			if(!Environment.isAppMode){
				return 'MOBEDITVIEW:'+objFormValue;
			}
			return 'EDITVIEW:'+objFormValue;
        }
        const stateTag = this.getDEMainStateTag(curData);
		if(!Environment.isAppMode){
            if (stateTag) {
                return `MOBEDITVIEW:MSTAG:${stateTag}`;
            }
			return 'MOBEDITVIEW:';
        }
        if(stateTag){
            return `EDITVIEW:MSTAG:${stateTag}`;
        }
		return 'EDITVIEW:';
    }

    /**
     * 获取数据对象的主状态标识
     * 
     * @param curData 当前数据
     * @memberof  IBIZPRO_INDEXUIServiceBase
     */  
    public getDEMainStateTag(curData:any){
        if(this.mainStateFields.length === 0) return null;

        this.mainStateFields.forEach((singleMainField:any) =>{
            if (!(singleMainField in curData)) {
                console.warn(`当前数据对象不包含属性「${singleMainField}」，根据「${singleMainField}」属性进行的主状态计算默认为空值`);
            }
        })
        for (let i = 0; i <= 1; i++) {
            let strTag:string = (curData[this.mainStateFields[0]] != null && curData[this.mainStateFields[0]] !== "")?(i == 0) ? `${curData[this.mainStateFields[0]]}` : "":"";
            if (this.mainStateFields.length >= 2) {
                for (let j = 0; j <= 1; j++) {
                    let strTag2:string = (curData[this.mainStateFields[1]] != null && curData[this.mainStateFields[1]] !== "")?`${strTag}__${(j == 0) ? `${curData[this.mainStateFields[1]]}` : ""}`:strTag;
                    if (this.mainStateFields.length >= 3) {
                        for (let k = 0; k <= 1; k++) {
                            let strTag3:string = (curData[this.mainStateFields[2]] != null && curData[this.mainStateFields[2]] !== "")?`${strTag2}__${(k == 0) ? `${curData[this.mainStateFields[2]]}` : ""}`:strTag2;
                            // 判断是否存在
                            return this.allDeMainStateMap.get(strTag3);
                        }
                    }else{
                        return this.allDeMainStateMap.get(strTag2);
                    }
                }
            }else{
                return this.allDeMainStateMap.get(strTag);
            }
        }
        return null;
    }

    /**
    * 获取数据对象当前操作标识
    * 
    * @param data 当前数据
    * @memberof  IBIZPRO_INDEXUIServiceBase
    */  
    public getDEMainStateOPPrivs(data:any){
        const stateTag = this.getDEMainStateTag(data);
        if (stateTag) {
            return this.allDeMainStateOPPrivsMap.get(stateTag);
        } else {
            return null;
        }
    }

    /**
    * 获取数据对象所有的操作标识
    * 
    * @param data 当前数据
    * @memberof  IBIZPRO_INDEXUIServiceBase
    */ 
   public getAllOPPrivs(data:any){
       return this.authService.getOPPrivs(this.getDEMainStateOPPrivs(data));
   }

}