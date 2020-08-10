import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import { Environment } from '@/environments/environment';
import AppFullImage from '../app-full-image/app-full-image';
import './html-container.less';

/**
 * 操作历史记录
 *
 * @export
 * @class HtmlContainer
 * @extends {Vue}
 */
@Component({
    components: {
        AppFullImage
    }
})
export default class HtmlContainer2 extends Vue {

    /**
     * 替换后html内容
     * 
     * @type string
     * @memberof HtmlContainer2
     */
    public htmlContent: string = '';

    /**
     * 呈现的Html内容
     * 
     * @type string
     * @memberof HtmlContainer2
     */
    @Prop({ default: `` })
    public content!: string;

    /**
     * 监控html变化
     * 
     * @memberof HtmlContainer2
     */
    @Watch('content', { immediate: true })
    public watchContent(): void {
        if (this.content) {
            if (!Object.is(this.content, '')) {
                this.htmlContent = this.content.replace(/\{(\d+)\.(bmp|jpg|jpeg|png|tif|gif|pcx|tga|exif|fpx|svg|psd|cdr|pcd|dxf|ufo|eps|ai|raw|WMF|webp)\}/g, `${Environment.BaseUrl}${Environment.ExportFile}/$1`);
                return;
            }
        }
        this.htmlContent = '';
    }

    /**
     * 绘制内容
     * 
     * @returns {VNode}
     * @memberof HtmlContainer2
     */
    public render(): any {
        return <div class='html-container'>
            {this.renderTagContent()}
        </div>
    }

    /**
     * 绘制标签内容
     * 
     * @returns {VNode}
     * @memberof HtmlContainer2
     */
    public renderTagContent() {
        let div = document.createElement('div');
        div.innerHTML = this.htmlContent;
        let tagContent = this.renderTagForeach(this.getVNode(div));
        return tagContent;
    }

    /**
     * 虚拟Dom转换为VNode
     * 
     * @param {node: any}
     * @returns {VNode}
     * @memberof HtmlContainer2
     */
    public renderTagForeach(node: any) {
        if (node.children && node.children.length > 0) {
            return <node.tag {...node.data.attrs}>
                {node.children.map((children: any) => {
                    return this.renderTagForeach(children);
                })}
            </node.tag>
        } else {
            if (Object.is(node.tag, 'img')) {
                return <app-full-image src={node.data.attrs.src} alt={node.data.attrs.alt}></app-full-image>
            }
            return node.text
        }
    }

    /**
     * 获取虚拟Dom
     * 
     * @param {node: any}
     * @returns {VNode}
     * @memberof HtmlContainer2
     */
    public getVNode(node: any) {
        let nodeType: any = node.nodeType;
        let _vnode: any = null;
        if (nodeType == 1) {
            let tag = node.nodeName;
            let attrs = node.attributes;
            let _data: any = {};
            for (let i = 0, len = attrs.length; i < len; i++) {
                _data[attrs[i].nodeName] = attrs[i].nodeValue;
            }
            _vnode = new VirtualDom(tag, _data, undefined, nodeType);
            let childNodes: any = node.childNodes
            for (let i = 0, len = childNodes.length; i < len; i++) {
                _vnode.appendChild(this.getVNode(childNodes[i]));
            }
        } else if (nodeType == 3) {
            _vnode = new VirtualDom(undefined, undefined, node.nodeValue, nodeType);
        }
        return _vnode;
    }

}

/**
 * 虚拟Dom
 * 
 * @class VirtualDom
 */
class VirtualDom {

    public tag: any;
    public data: any = {};
    public text: any;
    public type: any;
    public children: any[] = [];

    constructor(tag: any, data: any, value: any, type: any) {
        this.tag = tag && tag.toLowerCase()
        this.data.attrs = data
        this.text = value
        this.type = type
        this.children = []
    }
    appendChild(vnode: any) {
        this.children.push(vnode)
    }
}
