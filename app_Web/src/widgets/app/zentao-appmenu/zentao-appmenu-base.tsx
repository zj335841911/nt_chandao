import { Vue } from 'vue-property-decorator';

/**
 * 应用菜单基类
 */
export class ZentaoBase extends Vue {

    /**
     * 菜单点击
     *
     * @private
     * @param {*} item 菜单数据
     * @memberof Zentao
     */
    private click(item: any) {
        if (item) {
            switch (item.appfunctag) {
                case '_6': 
                    this.click_6(item);
                    return;
                case 'Auto5': 
                    this.clickAuto5(item);
                    return;
                case '_4': 
                    this.click_4(item);
                    return;
                case 'Auto2': 
                    this.clickAuto2(item);
                    return;
                case '_2': 
                    this.click_2(item);
                    return;
                case 'Auto1': 
                    this.clickAuto1(item);
                    return;
                case '_5': 
                    this.click_5(item);
                    return;
                default:
                    console.warn('未指定应用功能');
            }
        }
    }
    
    /**
     * 测试边栏
     *
     * @param {*} [item={}]
     * @memberof Zentao
     */
    public click_6(item: any = {}) {
        const viewparam: any = {};
        Object.assign(viewparam, {});
        const deResParameters: any[] = [];
        const parameters: any[] = [
            { pathName: 'products', parameterName: 'product' },
            { pathName: 'testleftsidebarlistview', parameterName: 'testleftsidebarlistview' },
        ];
        const path: string = this.$viewTool.buildUpRoutePath(this.$route, {}, deResParameters, parameters, [], viewparam);
        this.$router.push(path);
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
        this.$router.push(path);
    }
    
    /**
     * iBiz软件生产管理
     *
     * @param {*} [item={}]
     * @memberof Zentao
     */
    public click_4(item: any = {}) {
        const viewparam: any = {};
        Object.assign(viewparam, {});
        const deResParameters: any[] = [];
        const parameters: any[] = [
            { pathName: 'products', parameterName: 'product' },
            { pathName: 'htmlview', parameterName: 'htmlview' },
        ];
        const path: string = this.$viewTool.buildUpRoutePath(this.$route, {}, deResParameters, parameters, [], viewparam);
        this.$router.push(path);
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
        this.$router.push(path);
    }
    
    /**
     * 打开项目主页
     *
     * @param {*} [item={}]
     * @memberof Zentao
     */
    public click_2(item: any = {}) {
        const viewparam: any = {};
        Object.assign(viewparam, {});
        const deResParameters: any[] = [];
        const parameters: any[] = [
            { pathName: 'projectportalview', parameterName: 'projectportalview' },
        ];
        const path: string = this.$viewTool.buildUpRoutePath(this.$route, {}, deResParameters, parameters, [], viewparam);
        this.$router.push(path);
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
        this.$router.push(path);
    }
    
    /**
     * 打开测试主页
     *
     * @param {*} [item={}]
     * @memberof Zentao
     */
    public click_5(item: any = {}) {
        const viewparam: any = {};
        Object.assign(viewparam, {});
        const deResParameters: any[] = [];
        const parameters: any[] = [
            { pathName: 'testportalview', parameterName: 'testportalview' },
        ];
        const path: string = this.$viewTool.buildUpRoutePath(this.$route, {}, deResParameters, parameters, [], viewparam);
        this.$router.push(path);
    }

    /**
     * 绘制内容
     *
     * @private
     * @memberof Zentao
     */
    public render(): any {
        return <span style="display: none;"/>
    }

}