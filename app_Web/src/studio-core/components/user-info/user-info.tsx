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
            const leftTime = new Date();
            leftTime.setTime(leftTime.getSeconds() - 1000);
            document.cookie = "ibzuaa-token=;expires=" + leftTime.toUTCString();
            localStorage.removeItem('token');
            location.href = location.origin + location.pathname + '#/login?redirect=' + encodeURIComponent(location.href);
            return;
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
        return <dropdown class="studio-dropdown user-info-dropdown-menus" placement="bottom-end" on-on-click={(name: string) => this.onSelect(name)}>
            <div class="user-info">
                <div class="user-head-sculpture">埃</div>
                <span>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAUCAYAAACqJ5zlAAAAN0lEQVQoU2PsmLzCk5Hh/0wGBgaG/wyM6Yydk5c/+s/AIAsSYGRgeIwpgKEFpBQZMJIhMIzcAQAhOjo7JEcKTQAAAABJRU5ErkJggg=="></img>
                </span>
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