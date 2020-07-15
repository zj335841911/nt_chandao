import { Vue, Component, Prop, Emit } from 'vue-property-decorator';
import './user-info.less';

/**
 * 用户信息
 *
 * @export
 * @class UserInfo
 * @extends {Vue}
 */
@Component({})
export class UserInfo extends Vue {

    /**
     * 菜单项
     *
     * @type {any[]}
     * @memberof UserInfo
     */
    @Prop()
    public menus!: any[];

    /**
     * 菜单项点击
     *
     * @param {*} item
     * @returns {*}
     * @memberof UserInfo
     */
    @Emit('menu-click')
    public menuClick(item: any): any { }

    /**
     * 组件创建完毕
     *
     * @memberof UserInfo
     */
    public created(): void {
        const theme = localStorage.getItem('app-theme');
        if (theme) {
            this.changeTheme(theme);
        }
    }

    /**
     * 菜单选中点击
     *
     * @protected
     * @param {string} name
     * @memberof UserInfo
     */
    protected onSelect(name: string): void {
        // 是否为切换主题
        if (name.indexOf('app-theme-') === 0) {
            this.changeTheme(name);
            return;
        }
        if (name === 'custom-logout') {
            return this.$appService.logout();
        }
        const item: any = this.findMenuByName(name);
        if (item) {
            this.menuClick(item);
        }
    }

    /**
     * 变更主题
     *
     * @protected
     * @param {string} name
     * @memberof UserInfo
     */
    protected changeTheme(name: string): void {
        const dom = document.body.parentElement;
        if (dom) {
            dom.classList.forEach((val: string) => {
                if (val.indexOf('app-theme') === 0) {
                    dom.classList.remove(val);
                }
            });
            dom.classList.add(name);
            localStorage.setItem('app-theme', name);
        }
    }

    /**
     * 根据名称查找菜单项
     *
     * @protected
     * @param {string} name
     * @param {any[]} [menus=this.menus]
     * @returns {*}
     * @memberof UserInfo
     */
    protected findMenuByName(name: string, menus: any[] = this.menus): any {
        let item: any;
        menus.find((menu: any) => {
            if (Object.is(menu.name, name)) {
                item = menu;
                return menu;
            }
            if (menu.items) {
                const subItem: any = this.findMenuByName(name, menu.items);
                if (subItem) {
                    item = subItem;
                    return subItem;
                }
            }
        });
        return item;
    }

    /**
     * 绘制菜单
     *
     * @protected
     * @param {any[]} items
     * @returns {*}
     * @memberof UserInfo
     */
    protected renderMenuItems(items: any[]): any {
        if (!items) {
            return;
        }
        return items.map((item: any) => {
            if (item.items && item.items.length > 0) {
                return this.renderMenuGroup(item);
            }
            return this.renderMenuItem(item);
        });
    }

    /**
     * 绘制菜单项
     *
     * @protected
     * @param {*} item
     * @returns {*}
     * @memberof UserInfo
     */
    protected renderMenuItem(item: any): any {
        return <dropdownItem name={item.name} title={item.tooltip}>
            <menu-icon item={item} />
            {item.text}
        </dropdownItem>;
    }

    /**
     * 绘制菜单分组
     *
     * @protected
     * @param {*} item
     * @returns {*}
     * @memberof UserInfo
     */
    protected renderMenuGroup(item: any): any {
        return <dropdown class="user-menu-child" placement="left-start">
            <dropdownItem name={item.name} title={item.tooltip}>
                <icon type="ios-arrow-back"></icon>
                {item.text}
            </dropdownItem>
            <dropdownMenu slot="list">
                {this.renderMenuItems(item.items)}
            </dropdownMenu>
        </dropdown>;
    }

    /**
     * 绘制内容
     *
     * @returns {*}
     * @memberof UserInfo
     */
    public render(): any {
        const appData = this.$store.getters.getAppData();
        return <dropdown class="studio-dropdown user-info-dropdown-menus" placement="bottom-end" on-on-click={(name: string) => this.onSelect(name)}>
            <div class="user-info">
                <span>
                    <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32">
                        <path d="M512 85.333333c235.52 0 426.666667 191.146667 426.666667 426.666667s-191.146667 426.666667-426.666667 426.666667S85.333333 747.52 85.333333 512 276.48 85.333333 512 85.333333z m0 85.333334c-188.373333 0-341.333333 152.96-341.333333 341.333333s152.96 341.333333 341.333333 341.333333 341.333333-152.96 341.333333-341.333333-152.96-341.333333-341.333333-341.333333z m0 597.333333c-84.010667 0-161.450667-34.858667-213.333333-93.098667 26.154667-39.68 121.941333-77.568 213.333333-77.568s187.178667 37.888 213.333333 77.568C673.450667 733.141333 596.010667 768 512 768z m0-469.333333c70.826667 0 128 57.173333 128 128s-57.173333 128-128 128-128-57.173333-128-128 57.173333-128 128-128z"></path>
                    </svg>
                </span>
                <div class="user-head">{appData?.context?.srfloginname}</div>
            </div>
            <template slot="list">
                <dropdownMenu>
                    {this.renderMenuItems(this.menus)}
                    <dropdown class="user-menu-child" placement="left-start">
                        <dropdownItem name="主题" title="切换主题">
                            <icon type="ios-arrow-back"></icon>
                            主题颜色
                        </dropdownItem>
                        <dropdownMenu slot="list">
                            <dropdownItem name="app-theme-light" title="黑色主题">亮色</dropdownItem>
                            <dropdownItem name="app-theme-dark" title="黑色主题">黑色</dropdownItem>
                            <dropdownItem name="app-theme-blue-dark" title="黑色主题">蓝黑</dropdownItem>
                        </dropdownMenu>
                    </dropdown>
                    <dropdown class="user-menu-child" placement="left-start">
                        <dropdownItem name="custom-logout" title="退出登录">
                            <icon type="md-log-out" />
                            退出登录
                        </dropdownItem>
                    </dropdown>
                </dropdownMenu>
            </template>
        </dropdown>
    }

}