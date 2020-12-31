import { Vue } from 'vue-property-decorator';

/**
 * 应用菜单基类
 */
export class ZentaoBase extends Vue {

    /**
     * 获取应用上下文
     *
     * @memberof ZentaoBase
     */
    get context(): any {
        return this.$appService.contextStore.appContext || {};
    }

    /**
     * 菜单点击
     *
     * @param {*} item 菜单数据
     * @memberof ZentaoBase
     */
    public click(item: any) {
        if (item) {
            let judge = true;
            switch (item.appfunctag) {
                case 'AppFunc': 
                    this.clickAppFunc(item); break;
                case 'Auto8': 
                    this.clickAuto8(item); break;
                case 'Auto2': 
                    this.clickAuto2(item); break;
                case 'AppFunc6': 
                    this.clickAppFunc6(item); break;
                case 'Auto6': 
                    this.clickAuto6(item); break;
                case 'AppFunc3': 
                    this.clickAppFunc3(item); break;
                case 'Auto27': 
                    this.clickAuto27(item); break;
                case 'Auto10': 
                    this.clickAuto10(item); break;
                case 'Auto32': 
                    this.clickAuto32(item); break;
                case 'Auto1': 
                    this.clickAuto1(item); break;
                case 'Auto26': 
                    this.clickAuto26(item); break;
                case 'AppFunc9': 
                    this.clickAppFunc9(item); break;
                case 'PluginManagement': 
                    this.clickPluginManagement(item); break;
                case 'Auto5': 
                    this.clickAuto5(item); break;
                case 'Auto29': 
                    this.clickAuto29(item); break;
                case 'Auto9': 
                    this.clickAuto9(item); break;
                case 'AppFunc2': 
                    this.clickAppFunc2(item); break;
                case 'Auto11': 
                    this.clickAuto11(item); break;
                case 'AppFunc8': 
                    this.clickAppFunc8(item); break;
                case 'AppFunc7': 
                    this.clickAppFunc7(item); break;
                case 'Auto23': 
                    this.clickAuto23(item); break;
                case 'Auto15': 
                    this.clickAuto15(item); break;
                case 'AppFunc5': 
                    this.clickAppFunc5(item); break;
                case 'AppFunc4': 
                    this.clickAppFunc4(item); break;
                case 'POAppFunc': 
                    this.clickPOAppFunc(item); break;
                default:
                    judge = false;
                    console.warn('未指定应用功能');
            }
            if (judge && this.$uiState.isStyle2()) {
                this.$appService.navHistory.reset();
                this.$appService.viewStore.reset();
            }
        }
    }
    
    /**
     * 统计
     *
     * @param {*} [item={}]
     * @memberof Zentao
     */
    public clickAppFunc(item: any = {}) {
        const viewparam: any = {};
        Object.assign(viewparam, {});
        const deResParameters: any[] = [];
        const parameters: any[] = [
            { pathName: 'ibzmyterritories', parameterName: 'ibzmyterritory' },
            { pathName: 'statstabexpview', parameterName: 'statstabexpview' },
        ];
        const path: string = this.$viewTool.buildUpRoutePath(this.$route, {}, deResParameters, parameters, [], viewparam);
        if(Object.is(this.$route.fullPath,path)){
            return;
        }
        this.$nextTick(function(){
            this.$router.push(path);
        })
    }
    
    /**
     * iBiz软件生产管理
     *
     * @param {*} [item={}]
     * @memberof Zentao
     */
    public clickAuto8(item: any = {}) {
        const viewparam: any = {};
        Object.assign(viewparam, {});
        const deResParameters: any[] = [];
        const parameters: any[] = [
            { pathName: 'products', parameterName: 'product' },
            { pathName: 'htmlview', parameterName: 'htmlview' },
        ];
        const path: string = this.$viewTool.buildUpRoutePath(this.$route, {}, deResParameters, parameters, [], viewparam);
        if(Object.is(this.$route.fullPath,path)){
            return;
        }
        this.$nextTick(function(){
            this.$router.push(path);
        })
    }
    
    /**
     * 左边栏产品列表视图
     *
     * @param {*} [item={}]
     * @memberof Zentao
     */
    public clickAuto2(item: any = {}) {
        const viewparam: any = {};
        Object.assign(viewparam, {});
        const deResParameters: any[] = [];
        const parameters: any[] = [
            { pathName: 'products', parameterName: 'product' },
            { pathName: 'leftsidebarlistview', parameterName: 'leftsidebarlistview' },
        ];
        const path: string = this.$viewTool.buildUpRoutePath(this.$route, {}, deResParameters, parameters, [], viewparam);
        if(Object.is(this.$route.fullPath,path)){
            return;
        }
        this.$nextTick(function(){
            this.$router.push(path);
        })
    }
    
    /**
     * 系统配置
     *
     * @param {*} [item={}]
     * @memberof Zentao
     */
    public clickAppFunc6(item: any = {}) {
        const viewparam: any = {};
        Object.assign(viewparam, {});
        const deResParameters: any[] = [];
        const parameters: any[] = [
            { pathName: 'ibzproconfigs', parameterName: 'ibzproconfig' },
            { pathName: 'gridview', parameterName: 'gridview' },
        ];
        const path: string = this.$viewTool.buildUpRoutePath(this.$route, {}, deResParameters, parameters, [], viewparam);
        if(Object.is(this.$route.fullPath,path)){
            return;
        }
        this.$nextTick(function(){
            this.$router.push(path);
        })
    }
    
    /**
     * 打开项目主页
     *
     * @param {*} [item={}]
     * @memberof Zentao
     */
    public clickAuto6(item: any = {}) {
        const viewparam: any = {};
        Object.assign(viewparam, {});
        const deResParameters: any[] = [];
        const parameters: any[] = [
            { pathName: 'projectportalview', parameterName: 'projectportalview' },
        ];
        const path: string = this.$viewTool.buildUpRoutePath(this.$route, {}, deResParameters, parameters, [], viewparam);
        if(Object.is(this.$route.fullPath,path)){
            return;
        }
        this.$nextTick(function(){
            this.$router.push(path);
        })
    }
    
    /**
     * 系统更新日志
     *
     * @param {*} [item={}]
     * @memberof Zentao
     */
    public clickAppFunc3(item: any = {}) {
        const viewparam: any = {};
        Object.assign(viewparam, {});
        const deResParameters: any[] = [];
        const parameters: any[] = [
            { pathName: 'sysupdatelogs', parameterName: 'sysupdatelog' },
            { pathName: 'gridview', parameterName: 'gridview' },
        ];
        const path: string = this.$viewTool.buildUpRoutePath(this.$route, {}, deResParameters, parameters, [], viewparam);
        if(Object.is(this.$route.fullPath,path)){
            return;
        }
        this.$nextTick(function(){
            this.$router.push(path);
        })
    }
    
    /**
     * task主数据视图（链接）
     *
     * @param {*} [item={}]
     * @memberof Zentao
     */
    public clickAuto27(item: any = {}) {
        const viewparam: any = {};
        Object.assign(viewparam, {});
        const deResParameters: any[] = [];
        const parameters: any[] = [
            { pathName: 'tasks', parameterName: 'task' },
            { pathName: 'maindashboardview_link', parameterName: 'maindashboardview_link' },
        ];
        const path: string = this.$viewTool.buildUpRoutePath(this.$route, {}, deResParameters, parameters, [], viewparam);
        if(Object.is(this.$route.fullPath,path)){
            return;
        }
        this.$nextTick(function(){
            this.$router.push(path);
        })
    }
    
    /**
     * 我的地盘
     *
     * @param {*} [item={}]
     * @memberof Zentao
     */
    public clickAuto10(item: any = {}) {
        const viewparam: any = {};
        Object.assign(viewparam, {});
        const deResParameters: any[] = [];
        const parameters: any[] = [
            { pathName: 'ibzmyterritories', parameterName: 'ibzmyterritory' },
            { pathName: 'tabexpview', parameterName: 'tabexpview' },
        ];
        const path: string = this.$viewTool.buildUpRoutePath(this.$route, {}, deResParameters, parameters, [], viewparam);
        if(Object.is(this.$route.fullPath,path)){
            return;
        }
        this.$nextTick(function(){
            this.$router.push(path);
        })
    }
    
    /**
     * story主数据视图（链接）
     *
     * @param {*} [item={}]
     * @memberof Zentao
     */
    public clickAuto32(item: any = {}) {
        const viewparam: any = {};
        Object.assign(viewparam, {});
        const deResParameters: any[] = [];
        const parameters: any[] = [
            { pathName: 'stories', parameterName: 'story' },
            { pathName: 'maindashboardview_link', parameterName: 'maindashboardview_link' },
        ];
        const path: string = this.$viewTool.buildUpRoutePath(this.$route, {}, deResParameters, parameters, [], viewparam);
        if(Object.is(this.$route.fullPath,path)){
            return;
        }
        this.$nextTick(function(){
            this.$router.push(path);
        })
    }
    
    /**
     * 打开产品主页
     *
     * @param {*} [item={}]
     * @memberof Zentao
     */
    public clickAuto1(item: any = {}) {
        const viewparam: any = {};
        Object.assign(viewparam, {});
        const deResParameters: any[] = [];
        const parameters: any[] = [
            { pathName: 'productportalview', parameterName: 'productportalview' },
        ];
        const path: string = this.$viewTool.buildUpRoutePath(this.$route, {}, deResParameters, parameters, [], viewparam);
        if(Object.is(this.$route.fullPath,path)){
            return;
        }
        this.$nextTick(function(){
            this.$router.push(path);
        })
    }
    
    /**
     * bug主数据视图（链接）
     *
     * @param {*} [item={}]
     * @memberof Zentao
     */
    public clickAuto26(item: any = {}) {
        const viewparam: any = {};
        Object.assign(viewparam, {});
        const deResParameters: any[] = [];
        const parameters: any[] = [
            { pathName: 'bugs', parameterName: 'bug' },
            { pathName: 'maindashboardview_link', parameterName: 'maindashboardview_link' },
        ];
        const path: string = this.$viewTool.buildUpRoutePath(this.$route, {}, deResParameters, parameters, [], viewparam);
        if(Object.is(this.$route.fullPath,path)){
            return;
        }
        this.$nextTick(function(){
            this.$router.push(path);
        })
    }
    
    /**
     * 全文检索
     *
     * @param {*} [item={}]
     * @memberof Zentao
     */
    public clickAppFunc9(item: any = {}) {
        const viewparam: any = {};
        Object.assign(viewparam, {});
        const deResParameters: any[] = [];
        const parameters: any[] = [
            { pathName: 'ibizproindices', parameterName: 'ibizproindex' },
            { pathName: 'listview', parameterName: 'listview' },
        ];
        const path: string = this.$viewTool.buildUpRoutePath(this.$route, {}, deResParameters, parameters, [], viewparam);
        if(Object.is(this.$route.fullPath,path)){
            return;
        }
        this.$nextTick(function(){
            this.$router.push(path);
        })
    }
    
    /**
     * 插件管理
     *
     * @param {*} [item={}]
     * @memberof Zentao
     */
    public clickPluginManagement(item: any = {}) {
        const viewparam: any = {};
        Object.assign(viewparam, {});
        const deResParameters: any[] = [];
        const parameters: any[] = [
            { pathName: 'ibzmyterritories', parameterName: 'ibzmyterritory' },
            { pathName: 'usr3tabexpview', parameterName: 'usr3tabexpview' },
        ];
        const path: string = this.$viewTool.buildUpRoutePath(this.$route, {}, deResParameters, parameters, [], viewparam);
        if(Object.is(this.$route.fullPath,path)){
            return;
        }
        this.$nextTick(function(){
            this.$router.push(path);
        })
    }
    
    /**
     * 项目边栏
     *
     * @param {*} [item={}]
     * @memberof Zentao
     */
    public clickAuto5(item: any = {}) {
        const viewparam: any = {};
        Object.assign(viewparam, {});
        const deResParameters: any[] = [];
        const parameters: any[] = [
            { pathName: 'projects', parameterName: 'project' },
            { pathName: 'leftsidebarlistview', parameterName: 'leftsidebarlistview' },
        ];
        const path: string = this.$viewTool.buildUpRoutePath(this.$route, {}, deResParameters, parameters, [], viewparam);
        if(Object.is(this.$route.fullPath,path)){
            return;
        }
        this.$nextTick(function(){
            this.$router.push(path);
        })
    }
    
    /**
     * todo主数据视图（链接）
     *
     * @param {*} [item={}]
     * @memberof Zentao
     */
    public clickAuto29(item: any = {}) {
        const viewparam: any = {};
        Object.assign(viewparam, {});
        const deResParameters: any[] = [];
        const parameters: any[] = [
            { pathName: 'todos', parameterName: 'todo' },
            { pathName: 'maindashboardview_link', parameterName: 'maindashboardview_link' },
        ];
        const path: string = this.$viewTool.buildUpRoutePath(this.$route, {}, deResParameters, parameters, [], viewparam);
        if(Object.is(this.$route.fullPath,path)){
            return;
        }
        this.$nextTick(function(){
            this.$router.push(path);
        })
    }
    
    /**
     * 打开测试主页
     *
     * @param {*} [item={}]
     * @memberof Zentao
     */
    public clickAuto9(item: any = {}) {
        const viewparam: any = {};
        Object.assign(viewparam, {});
        const deResParameters: any[] = [];
        const parameters: any[] = [
            { pathName: 'testportalview', parameterName: 'testportalview' },
        ];
        const path: string = this.$viewTool.buildUpRoutePath(this.$route, {}, deResParameters, parameters, [], viewparam);
        if(Object.is(this.$route.fullPath,path)){
            return;
        }
        this.$nextTick(function(){
            this.$router.push(path);
        })
    }
    /**
     * 人员管理
     *
     * @param {*} [item={}]
     * @memberof Zentao
     */
    public clickAppFunc2(item: any = {}){
       const localdata: any = this.$store.getters.getLocalData();
       const url = `http://172.16.240.110:10001/#/index/null/sysdepartments/null/treeexpview`;
       window.open(url, '_blank');
    }
    
    /**
     * 测试边栏
     *
     * @param {*} [item={}]
     * @memberof Zentao
     */
    public clickAuto11(item: any = {}) {
        const viewparam: any = {};
        Object.assign(viewparam, {});
        const deResParameters: any[] = [];
        const parameters: any[] = [
            { pathName: 'products', parameterName: 'product' },
            { pathName: 'testleftsidebarlistview', parameterName: 'testleftsidebarlistview' },
        ];
        const path: string = this.$viewTool.buildUpRoutePath(this.$route, {}, deResParameters, parameters, [], viewparam);
        if(Object.is(this.$route.fullPath,path)){
            return;
        }
        this.$nextTick(function(){
            this.$router.push(path);
        })
    }
    
    /**
     * 人员树导航视图
     *
     * @param {*} [item={}]
     * @memberof Zentao
     */
    public clickAppFunc8(item: any = {}) {
        const viewparam: any = {};
        Object.assign(viewparam, {});
        const deResParameters: any[] = [];
        const parameters: any[] = [
            { pathName: 'sysemployees', parameterName: 'sysemployee' },
            { pathName: 'treeexpview', parameterName: 'treeexpview' },
        ];
        const path: string = this.$viewTool.buildUpRoutePath(this.$route, {}, deResParameters, parameters, [], viewparam);
        if(Object.is(this.$route.fullPath,path)){
            return;
        }
        this.$nextTick(function(){
            this.$router.push(path);
        })
    }
    
    /**
     * 计划模板
     *
     * @param {*} [item={}]
     * @memberof Zentao
     */
    public clickAppFunc7(item: any = {}) {
        const viewparam: any = {};
        Object.assign(viewparam, {});
        const deResParameters: any[] = [];
        const parameters: any[] = [
            { pathName: 'ibzplantemplets', parameterName: 'ibzplantemplet' },
            { pathName: 'gridview', parameterName: 'gridview' },
        ];
        const path: string = this.$viewTool.buildUpRoutePath(this.$route, {}, deResParameters, parameters, [], viewparam);
        if(Object.is(this.$route.fullPath,path)){
            return;
        }
        this.$nextTick(function(){
            this.$router.push(path);
        })
    }
    
    /**
     * 我的收藏
     *
     * @param {*} [item={}]
     * @memberof Zentao
     */
    public clickAuto23(item: any = {}) {
        const viewparam: any = {};
        Object.assign(viewparam, {});
        const deResParameters: any[] = [];
        const parameters: any[] = [
            { pathName: 'ibzfavorites', parameterName: 'ibzfavorites' },
            { pathName: 'tabexpview', parameterName: 'tabexpview' },
        ];
        const path: string = this.$viewTool.buildUpRoutePath(this.$route, {}, deResParameters, parameters, [], viewparam);
        if(Object.is(this.$route.fullPath,path)){
            return;
        }
        this.$nextTick(function(){
            this.$router.push(path);
        })
    }
    
    /**
     * 用例库
     *
     * @param {*} [item={}]
     * @memberof Zentao
     */
    public clickAuto15(item: any = {}) {
        const viewparam: any = {};
        Object.assign(viewparam, {});
        const deResParameters: any[] = [];
        const parameters: any[] = [
            { pathName: 'ibzlibs', parameterName: 'ibzlib' },
            { pathName: 'gridview', parameterName: 'gridview' },
        ];
        const path: string = this.$viewTool.buildUpRoutePath(this.$route, {}, deResParameters, parameters, [], viewparam);
        if(Object.is(this.$route.fullPath,path)){
            return;
        }
        this.$nextTick(function(){
            this.$router.push(path);
        })
    }
    
    /**
     * 汇报填写角色
     *
     * @param {*} [item={}]
     * @memberof Zentao
     */
    public clickAppFunc5(item: any = {}) {
        const viewparam: any = {};
        Object.assign(viewparam, {});
        const deResParameters: any[] = [];
        const parameters: any[] = [
            { pathName: 'ibzreportroleconfigs', parameterName: 'ibzreportroleconfig' },
            { pathName: 'gridview', parameterName: 'gridview' },
        ];
        const path: string = this.$viewTool.buildUpRoutePath(this.$route, {}, deResParameters, parameters, [], viewparam);
        if(Object.is(this.$route.fullPath,path)){
            return;
        }
        this.$nextTick(function(){
            this.$router.push(path);
        })
    }
    
    /**
     * 文档
     *
     * @param {*} [item={}]
     * @memberof Zentao
     */
    public clickAppFunc4(item: any = {}) {
        const viewparam: any = {};
        Object.assign(viewparam, {});
        const deResParameters: any[] = [];
        const parameters: any[] = [
            { pathName: 'doclibs', parameterName: 'doclib' },
            { pathName: 'libtabexpview', parameterName: 'libtabexpview' },
        ];
        const path: string = this.$viewTool.buildUpRoutePath(this.$route, {}, deResParameters, parameters, [], viewparam);
        if(Object.is(this.$route.fullPath,path)){
            return;
        }
        this.$nextTick(function(){
            this.$router.push(path);
        })
    }
    
    /**
     * 员工年度统计（产品经理）
     *
     * @param {*} [item={}]
     * @memberof Zentao
     */
    public clickPOAppFunc(item: any = {}) {
        const viewparam: any = {};
        Object.assign(viewparam, {});
        const deResParameters: any[] = [];
        const parameters: any[] = [
            { pathName: 'useryearworkstats', parameterName: 'useryearworkstats' },
        ];
        const view: any = {
            viewname: 'user-year-work-stats-edit-view',
            title: (this.$t('entities.useryearworkstats.views.editview.title') as any),
            height: 0,
            width: 0,
            placement: 'DRAWER_TOP'
        };
        const appdrawer = this.$appdrawer.openDrawer(view, JSON.parse(JSON.stringify(this.context)), viewparam);
        appdrawer.subscribe((result: any) => {
            console.log(result);
        });
    }

    /**
     * 绘制内容
     *
     * @private
     * @memberof ZentaoBase
     */
    public render(): any {
        return <span style="display: none;"/>
    }

}