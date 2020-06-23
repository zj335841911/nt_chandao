import { Prop } from 'vue-property-decorator';
import { ViewBase } from './ViewBase';

/**
 * 数据选择视图基类
 *
 * @export
 * @class PickupViewBase
 * @extends {ViewBase}
 */
export class PickupViewBase extends ViewBase {

    /**
     * 视图选中数据
     *
     * @type {any[]}
     * @memberof PickupViewBase
     */
    public viewSelections: any[] = [];

    /**
     * 是否显示按钮
     *
     * @type {boolean}
     * @memberof PickupViewBase
     */
    @Prop({ default: true })
    public isShowButton!: boolean;

    /**
     * 选中数据的字符串
     *
     * @type {string}
     * @memberof PickupViewBase
     */
    public selectedData: string = '';

    /**
     * 是否初始化已选中项
     *
     * @type {boolean}
     * @memberof PickupViewBase
     */
    public isInitSelected: boolean = false;

    /**
     * 是否单选
     *
     * @type {boolean}
     * @memberof PickupViewBase
     */
    public isSingleSelect: boolean = true;

    /**
     * 视图参数变更
     *
     * @protected
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof PickupViewBase
     */
    protected viewParamChange(newVal: any, oldVal: any): void {
        if (this.viewparams.selectedData) {
            this.selectedData = JSON.stringify(this.viewparams.selectedData);
        }
    }

    /**
     * 视图组件挂载完毕
     *
     * @protected
     * @memberof PickupViewBase
     */
    protected viewMounted(): void {
        if (this.viewparams.selectedData) {
            this.engine.onCtrlEvent('pickupviewpanel', 'selectionchange', this.viewparams.selectedData);
            this.onCLickRight();
        }
    }

    /**
     * 选中数据单击
     *
     * @param {*} item
     * @memberof PickupViewBase
     */
    public selectionsClick(item: any): void {
        item._select = !item._select;
        const removeSelect: boolean = this.viewSelections.some((selection: any) => selection._select);
        this.containerModel.view_leftbtn.disabled = !removeSelect;
    }

    /**
     * 选中树双击
     *
     * @param {*} item
     * @memberof PickupViewBase
     */
    public selectionsDBLClick(item: any): void {
        const index: number = this.viewSelections.findIndex((selection: any) => Object.is(selection.srfkey, item.srfkey));
        if (index !== -1) {
            this.viewSelections.splice(index, 1);
        }
        const removeSelect: boolean = this.viewSelections.some((selection: any) => selection._select);
        this.containerModel.view_leftbtn.disabled = !removeSelect;
        this.selectedData = JSON.stringify(this.viewSelections);
    }

    /**
     * 删除右侧全部选中数据
     *
     * @memberof PickupViewBase
     */
    public onCLickLeft(): void {
        const _selectiions = [...JSON.parse(JSON.stringify(this.viewSelections))];
        _selectiions.forEach((item: any) => {
            if (!item._select) {
                return;
            }
            const index = this.viewSelections.findIndex((selection: any) => Object.is(item.srfkey, selection.srfkey));
            if (index !== -1) {
                this.viewSelections.splice(index, 1);
            }
        });
        const removeSelect: boolean = this.viewSelections.some((selection: any) => selection._select);
        this.containerModel.view_leftbtn.disabled = !removeSelect;
        this.selectedData = JSON.stringify(this.viewSelections);
    }

    /**
     * 添加左侧选中数据
     *
     * @memberof PickupViewBase
     */
    public onCLickRight(): void {
        Object.values(this.containerModel).forEach((model: any) => {
            if (!Object.is(model.type, 'PICKUPVIEWPANEL')) {
                return;
            }
            let newSelections: any[] = [];
            model.selections.forEach((item: any) => {
                const index: number = this.viewSelections.findIndex((selection: any) => Object.is(item.srfkey, selection.srfkey));
                if (index === -1) {
                    let _item: any = { ...JSON.parse(JSON.stringify(item)) };
                    Object.assign(_item, { _select: false })
                    newSelections.push(_item);
                } else {
                    newSelections.push(this.viewSelections[index]);
                }
            });
            this.viewSelections = newSelections;
        });
        this.selectedData = JSON.stringify(this.viewSelections);
    }

    /**
     * 选中数据全部删除
     *
     * @memberof PickupViewBase
     */
    public onCLickAllLeft(): void {
        this.viewSelections = [];
        this.containerModel.view_leftbtn.disabled = true;
        this.engine.onCtrlEvent('pickupviewpanel', 'selectionchange', []);
        this.selectedData = JSON.stringify(this.viewSelections);
    }

    /**
     * 确定
     *
     * @memberof PickupViewBase
     */
    public onClickOk(): void {
        this.$emit('viewdataschange', this.viewSelections);
        this.$emit('close', null);
    }

    /**
     * 取消
     *
     * @memberof PickupViewBase
     */
    public onClickCancel(): void {
        this.$emit('close', null);
    }
}