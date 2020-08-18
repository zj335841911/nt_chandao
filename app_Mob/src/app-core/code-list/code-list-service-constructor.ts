import { ServiceConstructorBase } from '@/ibiz-core/service/service-constructor-base';

/**
 * 代码表服务构造器
 *
 * @export
 * @class CodeListConstructor
 */
export class CodeListServiceConstructor extends ServiceConstructorBase {

    /**
     * 初始化
     *
     * @protected
     * @memberof CodeListConstructor
     */
    protected init(): void {
    }


}
export const codeListServiceConstructor: CodeListServiceConstructor = new CodeListServiceConstructor();