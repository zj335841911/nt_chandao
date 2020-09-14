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
        this.allService.set('RelatedStory', () => import('@/app-core/code-list/related-story'));
        this.allService.set('CurProductPlan', () => import('@/app-core/code-list/cur-product-plan'));
        this.allService.set('UserRealName', () => import('@/app-core/code-list/user-real-name'));
        this.allService.set('ProductBranch', () => import('@/app-core/code-list/product-branch'));
        this.allService.set('CurProductBuild', () => import('@/app-core/code-list/cur-product-build'));
        this.allService.set('BugModule', () => import('@/app-core/code-list/bug-module'));
        this.allService.set('BugUserRealName', () => import('@/app-core/code-list/bug-user-real-name'));
        this.allService.set('CurCaseVersion', () => import('@/app-core/code-list/cur-case-version'));
        this.allService.set('UserRealNameProject', () => import('@/app-core/code-list/user-real-name-project'));
        this.allService.set('CurStory', () => import('@/app-core/code-list/cur-story'));
        this.allService.set('UserRealNameTaskTeam', () => import('@/app-core/code-list/user-real-name-task-team'));
    }


}
export const codeListServiceConstructor: CodeListServiceConstructor = new CodeListServiceConstructor();