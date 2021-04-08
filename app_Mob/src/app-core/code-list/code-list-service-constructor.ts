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
        this.allService.set('UserRealName_valueofid', () => import('@/app-core/code-list/user-real-name-valueofid'));
        this.allService.set('UserRealNameProject', () => import('@/app-core/code-list/user-real-name-project'));
        this.allService.set('ProjectProductPlan', () => import('@/app-core/code-list/project-product-plan'));
        this.allService.set('CodeList', () => import('@/app-core/code-list/code-list'));
        this.allService.set('MyCompleteTask', () => import('@/app-core/code-list/my-complete-task'));
        this.allService.set('ProductBranch_Cache', () => import('@/app-core/code-list/product-branch-cache'));
        this.allService.set('SysOperator', () => import('@/app-core/code-list/sys-operator'));
        this.allService.set('ProductBranch', () => import('@/app-core/code-list/product-branch'));
        this.allService.set('Product', () => import('@/app-core/code-list/product'));
        this.allService.set('UserRealName', () => import('@/app-core/code-list/user-real-name'));
        this.allService.set('MonthlyCompleteTaskChoice', () => import('@/app-core/code-list/monthly-complete-task-choice'));
        this.allService.set('UserRealNameUnAssignTo_Gird', () => import('@/app-core/code-list/user-real-name-un-assign-to-gird'));
        this.allService.set('Role', () => import('@/app-core/code-list/role'));
        this.allService.set('CurProductBuild', () => import('@/app-core/code-list/cur-product-build'));
        this.allService.set('UserRealName_Gird', () => import('@/app-core/code-list/user-real-name-gird'));
        this.allService.set('RelatedStory', () => import('@/app-core/code-list/related-story'));
        this.allService.set('CurProductPlan', () => import('@/app-core/code-list/cur-product-plan'));
        this.allService.set('UserRealNameProductTeam', () => import('@/app-core/code-list/user-real-name-product-team'));
        this.allService.set('MyPlanTask', () => import('@/app-core/code-list/my-plan-task'));
        this.allService.set('UserRealNameTaskTeam', () => import('@/app-core/code-list/user-real-name-task-team'));
        this.allService.set('CurStory', () => import('@/app-core/code-list/cur-story'));
        this.allService.set('ProductPlan', () => import('@/app-core/code-list/product-plan'));
        this.allService.set('CurCaseVersion', () => import('@/app-core/code-list/cur-case-version'));
        this.allService.set('BugModule', () => import('@/app-core/code-list/bug-module'));
    }


}
export const codeListServiceConstructor: CodeListServiceConstructor = new CodeListServiceConstructor();