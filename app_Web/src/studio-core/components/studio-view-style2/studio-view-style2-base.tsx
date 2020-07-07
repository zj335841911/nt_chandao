import { StudioViewBase } from '../studio-view/studio-view-base';
import './studio-view-style2.less';

/**
 * 视图布局模式2
 *
 * @export
 * @class StudioViewStyle2Base
 * @extends {Vue}
 */
export class StudioViewStyle2Base extends StudioViewBase {

    /**
     * 组件创建完毕
     *
     * @memberof StudioViewStyle2Base
     */
    public created(): void {
        if (this.hiddenHeader) {
            this.isShowHeader = false;
        } else {
            this.isShowHeader = (this.$slots.title || this.$slots.quickSearchForm || this.$slots.quickGroupSearch) ? true : false;
        }
    }

    /**
     * 容器样式
     *
     * @protected
     * @param {{ [str: string]: boolean }} [classNames]
     * @returns {{ [str: string]: boolean }}
     * @memberof StudioViewStyle2Base
     */
    protected getContainerClass(classNames?: { [str: string]: boolean }): { [str: string]: boolean } {
        return super.getContainerClass({
            'mode-style2': true
        });
    }

    /**
     * 绘制视图布局内容
     *
     * @protected
     * @returns {*}
     * @memberof StudioViewStyle2Base
     */
    protected renderContent(): any {
        return [
            (this.$slots.toolbar || this.$slots.quickSearch) ? <div class="view-top">
                {this.$slots.toolbar ? <div class="view-toolbar">{this.$slots.toolbar}</div> : null}
                {this.$slots.quickSearch ? <div class="quick-search">
                    <transition name="opacity-transition">
                        {this.$slots.quickSearch}
                    </transition>
                </div> : null}
            </div> : null,
            this.isShowHeader ? <div class="view-header">
                {this.$slots.title ? <div class="title">{this.$slots.title}</div> : null}
                {this.$slots.quickSummary ? <div class="quickSummary">{this.$slots.quickSummary}</div> : null}
                {this.$slots.quickGroupSearch ? <div class="quick-group-search">
                    {this.$slots.quickGroupSearch}
                </div> : null}
                {this.$slots.quickSearchForm ? <div class="quick-search-form">{this.$slots.quickSearchForm}</div> : null}
            </div> : null,
            <div class={{ 'view-content': true, 'show-search-form': this.$slots.searchForm }}>
                {this.$slots.searchForm ? <div class="search-form-wrapper">
                    <transition name="width-transition">
                        {this.$slots.searchForm}
                    </transition>
                </div> : null}
                <div class="content-wrapper">
                    {this.$slots.default}
                </div>
            </div>,
            this.$slots.footer ? <div class="view-footer">
                {this.$slots.footer}
            </div> : null
        ];
    }

}