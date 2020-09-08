import { Vue, Component, Prop } from 'vue-property-decorator';
import './view-quick-group-tab.less';

/**
 * 快速分组分页导航展示模式
 *
 * @export
 * @class ViewQuickGroupTab
 * @extends {Vue}
 */
@Component({})
export class ViewQuickGroupTab extends Vue {

    /**
     * 快速分组代码表
     *
     * @type {any[]}
     * @memberof ViewQuickGroupTab
     */
    @Prop({ default: () => [] })
    public items!: any[];

    render() {
        return <div class='view-quick-group-tab'>
            <div class='tab-list'>
                {this.items.map((item: any) => {
                    return <div class='`tab-item`'>
                        {item.text}
                    </div>;
                })}
            </div>
        </div>;
    }
}