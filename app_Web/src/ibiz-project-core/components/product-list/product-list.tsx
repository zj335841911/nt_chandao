import { Vue, Component, Prop, Emit } from 'vue-property-decorator';
import { Product } from '@/interface/entity/product';
import './product-list.less';

/**
 * 产品展示列表
 *
 * @export
 * @class ProductList
 * @extends {Vue}
 */
@Component({})
export class ProductList extends Vue {

    /**
     * 数据
     *
     * @type {any[]}
     * @memberof ProductList
     */
    @Prop({ default: () => [] })
    public items!: Product[];

    /**
     * 项单机事件
     *
     * @param {Product} item
     * @memberof ProductList
     */
    @Emit('item-click')
    public itemClick(item: Product): void { }

    /**
     * 绘制产品项
     *
     * @protected
     * @param {Product} p
     * @returns {*}
     * @memberof ProductList
     */
    protected renderItem(p: Product): any {
        return <listItem>
            <div class="title">
                <tag type="border">{p.id}</tag>
                <tag>{p.code}</tag>
                <span class="product-name">{p.name}</span>
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
                    计划数：3
                </li>
                <li>
                    发布数：6
                </li>
                <li>
                    激活需求：9
                </li>
                <li>
                    未解决Bug：12
                </li>
            </template>
        </listItem>;
    }

    /**
     * 绘制内容
     *
     * @returns {*}
     * @memberof ProductList
     */
    public render(): any {
        return <div class="product-list">
            {this.items.map((item: Product) => {
                return <list item-layout="vertical">{this.renderItem(item)}</list>;
            })}
        </div>;
    }

}