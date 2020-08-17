import { ServiceConstructorBase } from '@/ibiz-core/service/service-constructor-base';

/**
 * 应用实体服务
 *
 * @export
 * @class AppEntityServiceConstructor
 * @extends {ServiceConstructorBase}
 */
export class AppEntityServiceConstructor extends ServiceConstructorBase {

    /**
     * 初始化
     *
     * @protected
     * @memberof AppEntityServiceConstructor
     */
    protected init(): void {
    }

}

/**
 * 应用实体服务构造器
 */
export const appEntityServiceConstructor: AppEntityServiceConstructor = new AppEntityServiceConstructor();