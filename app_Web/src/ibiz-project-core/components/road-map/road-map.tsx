import { Vue, Component, Prop } from 'vue-property-decorator';
import { RoadMapItem } from './road-map-interface';
import './road-map.less';

/**
 * 
 *
 * @export
 * @class RoadMap
 * @extends {Vue}
 */
@Component({})
export class RoadMap extends Vue {

    /**
     * 绘制模式
     *
     * @type {('group' | 'default')}
     * @memberof RoadMap
     */
    @Prop({ default: 'default' })
    public mode!: 'group' | 'default';

    /**
     * 路线图数据
     *
     * @type {RoadMapItem[]}
     * @memberof RoadMap
     */
    // @Prop({ default: () => [] })
    public items!: RoadMapItem[];

    /**
     * 组件创建完毕
     *
     * @memberof RoadMap
     */
    public created(): void {
        this.items = [
            { text: '一期', start: '2020-01-01', end: '2020-02-01' },
            { text: '二期', start: '2020-03-01', end: '2020-04-01' },
            { text: '三期', start: '2020-05-01', end: '2020-06-01' },
            { text: '四期', start: '2020-07-01', end: '2020-08-01' },
            { text: '五期', start: '2020-09-01', end: '2020-10-01' },
            { text: '六期', start: '2021-01-01', end: '2021-02-01' },
            { text: '七期', start: '2021-03-01', end: '2020-04-01' }
        ];
    }

    /**
     * 绘制内容
     *
     * @returns {*}
     * @memberof RoadMap
     */
    public render(): any {
        return <div class="road-map">
            <div class="road-map-wrapper">
                {this.items.map((item) => {
                    return <div class="road-map-item">
                        <a href="javascript:void(0);">
                            <div class="content">
                                <div class="title">{item.text}</div>
                                <div class="date">{item.start}{Object.is(this.mode, 'group') ? '~' + item.end : ''}</div>
                            </div>
                        </a>
                    </div>;
                })}
            </div>
        </div>;
    }

}