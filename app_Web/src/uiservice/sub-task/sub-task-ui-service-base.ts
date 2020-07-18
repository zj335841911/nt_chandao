import { Environment } from '@/environments/environment';
import { UIActionTool,Util } from '@/utils';
import UIService from '../ui-service';
import { Subject } from 'rxjs';
import SubTaskService from '@/service/sub-task/sub-task-service';
import SubTaskAuthService from '@/authservice/sub-task/sub-task-auth-service';

/**
 * 任务UI服务对象基类
 *
 * @export
 * @class SubTaskUIServiceBase
 */
export default class SubTaskUIServiceBase extends UIService {

    /**
     * 是否支持工作流
     * 
     * @memberof  SubTaskUIServiceBase
     */
    public isEnableWorkflow:boolean = false;

    /**
     * 当前UI服务对应的数据服务对象
     * 
     * @memberof  SubTaskUIServiceBase
     */
    public dataService:SubTaskService = new SubTaskService();

    /**
     * 所有关联视图
     * 
     * @memberof  SubTaskUIServiceBase
     */ 
    public allViewMap: Map<string, Object> = new Map();

    /**
     * 状态值
     * 
     * @memberof  SubTaskUIServiceBase
     */ 
    public stateValue: number = 0;

    /**
     * 状态属性
     * 
     * @memberof  SubTaskUIServiceBase
     */ 
    public stateField: string = "";

    /**
     * 主状态属性集合
     * 
     * @memberof  SubTaskUIServiceBase
     */  
    public mainStateFields:Array<any> = ['status'];

    /**
     * 主状态集合Map
     * 
     * @memberof  SubTaskUIServiceBase
     */  
    public allDeMainStateMap:Map<string,string> = new Map();

    /**
     * 主状态操作标识Map
     * 
     * @memberof  SubTaskUIServiceBase
     */ 
    public allDeMainStateOPPrivsMap:Map<string,any> = new Map();

    /**
     * Creates an instance of  SubTaskUIServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  SubTaskUIServiceBase
     */
    constructor(opts: any = {}) {
        super(opts);
        this.authService = new SubTaskAuthService(opts);
        this.initViewMap();
        this.initDeMainStateMap();
        this.initDeMainStateOPPrivsMap();
    }

    /**
     * 初始化视图Map
     * 
     * @memberof  SubTaskUIServiceBase
     */  
    public initViewMap(){
        this.allViewMap.set(':',{viewname:'subtasknewview',srfappde:'subtasks'});
    }

    /**
     * 初始化主状态集合
     * 
     * @memberof  SubTaskUIServiceBase
     */  
    public initDeMainStateMap(){
        this.allDeMainStateMap.set('cancel','cancel');
        this.allDeMainStateMap.set('closed','closed');
        this.allDeMainStateMap.set('doing','doing');
        this.allDeMainStateMap.set('done','done');
        this.allDeMainStateMap.set('pause','pause');
        this.allDeMainStateMap.set('wait','wait');
    }

    /**
     * 初始化主状态操作标识
     * 
     * @memberof  SubTaskUIServiceBase
     */  
    public initDeMainStateOPPrivsMap(){
        this.allDeMainStateOPPrivsMap.set('cancel',{'ASSIGN':0,'ACTIVATION':0,'EDIT':0,'CLOSE':0,'SUBTASKS':0});
        this.allDeMainStateOPPrivsMap.set('closed',{'SUBTASKS':1,'ACTIVATION':1,'EDIT':1,'DELETE':1});
        this.allDeMainStateOPPrivsMap.set('doing',{'PAUSE':1,'CANCEL':1,'EDIT':1,'SUBTASKS':1,'COMPLETE':1,'ASSIGN':1});
        this.allDeMainStateOPPrivsMap.set('done',{'CLOSE':0,'EDIT':0,'ASSIGN':0,'ACTIVATION':0,'SUBTASKS':0,'DELETE':0});
        this.allDeMainStateOPPrivsMap.set('pause',{'CANCEL':1,'PROCEED':1,'EDIT':1,'ASSIGN':1,'SUBTASKS':1,'DELETE':1,'COMPLETE':1});
        this.allDeMainStateOPPrivsMap.set('wait',{'DELETE':1,'ASSIGN':1,'ACTIVATION':1,'EDIT':1,'CANCEL':1,'START':1,'SUBTASKS':1});
    }


    /**
     * 获取指定数据的重定向页面
     * 
     * @param srfkey 数据主键
     * @param isEnableWorkflow  重定向视图是否需要处理流程中的数据
     * @memberof  SubTaskUIServiceBase
     */
    public async getRDAppView(srfkey:string,isEnableWorkflow:boolean){
        this.isEnableWorkflow = isEnableWorkflow;
        // 进行数据查询
        let result:any = await this.dataService.Get({subtask:srfkey});
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
     * @memberof  SubTaskUIServiceBase
	 */
	public getRealDEType(entity:any){

    }

    /**
     * 获取实体单数据实体视图预定义参数
     * 
     * @param curData 当前数据
     * @param bDataInWF 是否有数据在工作流中
     * @param bWFMode   是否工作流模式
     * @memberof  SubTaskUIServiceBase
     */
    public async getDESDDEViewPDTParam(curData:any, bDataInWF:boolean, bWFMode:boolean){
        let strPDTParam:string = '';
		if (bDataInWF) {
			// 判断数据是否在流程中
        }
        //多表单，todo
        const isEnableMultiForm:boolean = false;
        const multiFormDEField:string|null =null;

        if (isEnableMultiForm && multiFormDEField) {
			const objFormValue:string = curData[multiFormDEField];
			if(!Environment.isAppMode){
				return 'MOBEDITVIEW'+objFormValue;
			}
			return 'EDITVIEW'+objFormValue;
        }
		if(!Environment.isAppMode){
            if(this.getDEMainStateTag(curData)){
                return `MOBEDITVIEW:MSTAG:${ this.getDEMainStateTag(curData)}`;
            }
			return 'MOBEDITVIEW:';
        }
        if(this.getDEMainStateTag(curData)){
            return `EDITVIEW:MSTAG:${ this.getDEMainStateTag(curData)}`;
        }
		return 'EDITVIEW:';
    }

    /**
     * 获取数据对象的主状态标识
     * 
     * @param curData 当前数据
     * @memberof  SubTaskUIServiceBase
     */  
    public getDEMainStateTag(curData:any){
        if(this.mainStateFields.length === 0) return null;

        this.mainStateFields.forEach((singleMainField:any) =>{
            if(!(singleMainField in curData)){
                console.error(`当前数据对象不包含属性singleMainField，可能会发生错误`);
            }
        })
        for (let i = 0; i <= 1; i++) {
            let strTag:string = (curData[this.mainStateFields[0]])?(i == 0) ? curData[this.mainStateFields[0]] : "":"";
            if (this.mainStateFields.length >= 2) {
                for (let j = 0; j <= 1; j++) {
                    let strTag2:string = (curData[this.mainStateFields[1]])?`${strTag}__${(j == 0) ? curData[this.mainStateFields[1]] : ""}`:strTag;
                    if (this.mainStateFields.length >= 3) {
                        for (let k = 0; k <= 1; k++) {
                            let strTag3:string = (curData[this.mainStateFields[2]])?`${strTag2}__${(k == 0) ? curData[this.mainStateFields[2]] : ""}`:strTag2;
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
    * @memberof  SubTaskUIServiceBase
    */  
   public getDEMainStateOPPrivs(data:any){
        if(this.getDEMainStateTag(data)){
            return this.allDeMainStateOPPrivsMap.get((this.getDEMainStateTag(data) as string));
        }else{
            return null;
        }
   }

    /**
    * 获取数据对象所有的操作标识
    * 
    * @param data 当前数据
    * @memberof  SubTaskUIServiceBase
    */ 
   public getAllOPPrivs(data:any){
       return this.authService.getOPPrivs(this.getDEMainStateOPPrivs(data));
   }

}