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
        this.allService.set('BugUserRealName', () => import('@/app-core/code-list/bug-user-real-name'));
        this.allService.set('CurCaseVersion', () => import('@/app-core/code-list/cur-case-version'));
        this.allService.set('UserRealNameProject', () => import('@/app-core/code-list/user-real-name-project'));
        this.allService.set('UserRealName', () => import('@/app-core/code-list/user-real-name'));
    }


}
export const codeListServiceConstructor: CodeListServiceConstructor = new CodeListServiceConstructor();