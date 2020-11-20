import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool, Util, ViewTool } from '@/utils';
import { Watch, TreeExpBarControlBase } from '@/studio-core';
import DocLibService from '@/service/doc-lib/doc-lib-service';
import ProjectTreeExpViewtreeexpbarService from './project-tree-exp-viewtreeexpbar-treeexpbar-service';
import DocLibUIService from '@/uiservice/doc-lib/doc-lib-ui-service';

/**
 * treeexpbar部件基类
 *
 * @export
 * @class TreeExpBarControlBase
 * @extends {ProjectTreeExpViewtreeexpbarTreeExpBarBase}
 */
export class ProjectTreeExpViewtreeexpbarTreeExpBarBase extends TreeExpBarControlBase {
    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof ProjectTreeExpViewtreeexpbarTreeExpBarBase
     */
    protected controlType: string = 'TREEEXPBAR';

    /**
     * 建构部件服务对象
     *
     * @type {ProjectTreeExpViewtreeexpbarService}
     * @memberof ProjectTreeExpViewtreeexpbarTreeExpBarBase
     */
    public service: ProjectTreeExpViewtreeexpbarService = new ProjectTreeExpViewtreeexpbarService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {DocLibService}
     * @memberof ProjectTreeExpViewtreeexpbarTreeExpBarBase
     */
    public appEntityService: DocLibService = new DocLibService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof ProjectTreeExpViewtreeexpbarTreeExpBarBase
     */
    protected appDeName: string = 'doclib';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof ProjectTreeExpViewtreeexpbarTreeExpBarBase
     */
    protected appDeLogicName: string = '文档库';

    /**
     * 界面UI服务对象
     *
     * @type {DocLibUIService}
     * @memberof ProjectTreeExpViewtreeexpbarBase
     */  
    public appUIService: DocLibUIService = new DocLibUIService(this.$store);

    /**
     * treeexpbar_tree 部件 selectionchange 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProjectTreeExpViewtreeexpbarTreeExpBarBase
     */
    public treeexpbar_tree_selectionchange($event: any, $event2?: any) {
        this.treeexpbar_selectionchange($event, 'treeexpbar_tree', $event2);
    }

    /**
     * treeexpbar_tree 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProjectTreeExpViewtreeexpbarTreeExpBarBase
     */
    public treeexpbar_tree_load($event: any, $event2?: any) {
        this.treeexpbar_load($event, 'treeexpbar_tree', $event2);
    }


    /**
     * 控件宽度
     *
     * @type {number}
     * @memberof ProjectTreeExpViewtreeexpbarBase
     */
    public ctrlWidth:number = 0;

    /**
     * 获取关系项视图
     *
     * @param {*} [arg={}]
     * @returns {*}
     * @memberof ProjectTreeExpViewtreeexpbarBase
     */
    public getExpItemView(arg: any = {}): any {
        let expmode = arg.nodetype.toUpperCase();
        if (!expmode) {
            expmode = '';
        }
        if (Object.is(expmode, 'FILES')) {
            return {  
                viewname: 'file-project-grid-view-file', 
                parentdata: {},
                deKeyField:'file'
			};
        }
        if (Object.is(expmode, 'CHILDDOCLIBMODULE')) {
            return {  
                viewname: 'doc-lib-usr3-tree-view', 
                parentdata: {},
                deKeyField:'doclib'
			};
        }
        if (Object.is(expmode, 'PROJECT')) {
            return {  
                viewname: 'doc-lib-project-tree-view', 
                parentdata: {"srfparentdefname":"project"},
                deKeyField:'doclib'
			};
        }
        if (Object.is(expmode, 'DOCLIB')) {
            return {  
                viewname: 'doc-lib-usr2-tree-view', 
                parentdata: {},
                deKeyField:'doclib'
			};
        }
        if (Object.is(expmode, 'ROOTDOCLIBMODULE')) {
            return {  
                viewname: 'doc-lib-usr3-tree-view', 
                parentdata: {},
                deKeyField:'doclib'
			};
        }
        return null;
    }

    /**
    * 执行mounted后的逻辑
    *
    * @memberof ProjectTreeExpViewtreeexpbarBase
    */
    public ctrlMounted(){ 
        if(this.$store.getters.getViewSplit(this.viewUID)){
            this.split = this.$store.getters.getViewSplit(this.viewUID);
        }else{
            let containerWidth:number = (document.getElementById("projecttreeexpviewtreeexpbar") as any).offsetWidth;
            if(this.ctrlWidth){
                    this.split = this.ctrlWidth/containerWidth;
            }
            this.$store.commit("setViewSplit",{viewUID:this.viewUID,viewSplit:this.split}); 
        }  
    }

    /**
     * 视图数据加载完成
     *
     * @param {*} $event
     * @memberof ProjectTreeExpViewtreeexpbarBase
     */
    public onViewLoad($event: any): void {
        this.$emit('load', $event);
    }
}