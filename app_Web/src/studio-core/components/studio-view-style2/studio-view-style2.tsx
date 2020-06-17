import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { StudioViewBase } from '../studio-view/studio-view-base';
import './studio-view-style2.less';

/**
 * 视图布局模式2
 *
 * @export
 * @class StudioViewStyle2
 * @extends {Vue}
 */
@Component({})
@VueLifeCycleProcessing()
export class StudioViewStyle2 extends StudioViewBase {

    /**
     * 容器样式
     *
     * @protected
     * @param {{ [str: string]: boolean }} [classNames]
     * @returns {{ [str: string]: boolean }}
     * @memberof StudioViewStyle2
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
     * @memberof StudioViewStyle2
     */
    protected renderContent(): any {
        return [
            this.isShowHeader ? <div class="view-header">
                {this.$slots.toolbar ? <div class="toolbar">{this.$slots.toolbar}</div> : null}
            </div> : null,
            <div class="view-content">
                {this.$slots.default}
            </div>,
            this.$slots.footer ? <div class="view-footer">
                {this.$slots.footer}
            </div> : null
        ];
    }

}