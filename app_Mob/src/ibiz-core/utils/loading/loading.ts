import i18n from '@/locale';

/**
 * 全局加载动画工具类
 *
 * @export
 * @class Loading
 */
export class Loading {
    /**
     * 加载个数计数
     *
     * @protected
     * @type {number}
     * @memberof DragDesignBase
     */
    protected static loadingCount: number = 0;

    /**
     * 加载对象
     *
     * @private
     * @static
     * @type {*}
     * @memberof Loading
     */
    private static loading: any = null;

    /**
     * 显示加载动画
     *
     * @static
     * @param {(any | string)} [message]
     * @memberof Loading
     */
    public static show(message?: any | string): void {
        if (this.loadingCount === 0) {
            this.loading = document.createElement('ion-loading');
            this.loading.message = message ? message : i18n.t('app.loadding');;
            document.body.appendChild(this.loading);
            this.loading.present();
        }
        this.loadingCount++;
    }

    /**
     * 隐藏加载动画
     *
     * @memberof DragDesignBase
     */
    public static hidden(): void {
        this.loadingCount--;
        if (this.loadingCount < 0) {
            this.loadingCount = 0;
        }
        if (this.loadingCount === 0) {
            if (this.loading) {
                this.loading.dismiss();
                this.loading = null;
            }
        }
    }
}