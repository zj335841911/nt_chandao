import { Vue, Component, Prop, Emit } from 'vue-property-decorator';
import { Project } from '@/interface/entity/project';
import './project-list.less';

/**
 * 产品展示列表
 *
 * @export
 * @class ProjectList
 * @extends {Vue}
 */
@Component({})
export class ProjectList extends Vue {

    /**
     * 数据
     *
     * @type {any[]}
     * @memberof ProjectList
     */
    @Prop({ default: () => [] })
    public items!: Project[];

    /**
     * 项单机事件
     *
     * @param {Project} item
     * @memberof ProjectList
     */
    @Emit('item-click')
    public itemClick(item: Project): void { }

    /**
     * 绘制产品项
     *
     * @protected
     * @param {Project} p
     * @returns {*}
     * @memberof ProjectList
     */
    protected renderItem(p: Project): any {
        return <listItem>
            <div class="title">
                <tag type="border">{p.id}</tag>
                <tag>{p.code}</tag>
                <span class="project-name">{p.name}</span>
            </div>
            <div class="content">
                <tag color="cyan">类型：{p.type}</tag>
                <tag color="geekblue">状态：{p.status}</tag>
            </div>
            <div class="open-action" on-click={() => this.itemClick(p)}>
                <icon type="ios-arrow-forward" />
            </div>
            <template slot="action">
                <li>
                    需求：5
                </li>
                <li>
                    任务：6
                </li>
                <li>
                    Bug：12
                </li>
            </template>
        </listItem>;
    }

    /**
     * 绘制内容
     *
     * @returns {*}
     * @memberof ProjectList
     */
    public render(): any {
        return <div class="project-list">
            {this.items.map((item: Project) => {
                return <list item-layout="vertical">{this.renderItem(item)}</list>;
            })}
        </div>;
    }

}