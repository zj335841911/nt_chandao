import { ServiceConstructorBase } from '@/ibiz-core/service/service-constructor-base';
/**
 * 实体权限服务注册中心
 *
 * @export
 * @class AuthServiceConstructor
 */
export class AuthServiceConstructor extends ServiceConstructorBase {

    /**
     * 初始化
     *
     * @protected
     * @memberof AuthServiceConstructor
     */
    protected init(): void {
        this.allService.set('user', () => import('@/app-core/auth-service/user/user-auth-service'));
        this.allService.set('projectteam', () => import('@/app-core/auth-service/project-team/project-team-auth-service'));
        this.allService.set('task', () => import('@/app-core/auth-service/task/task-auth-service'));
        this.allService.set('product', () => import('@/app-core/auth-service/product/product-auth-service'));
        this.allService.set('project', () => import('@/app-core/auth-service/project/project-auth-service'));
        this.allService.set('story', () => import('@/app-core/auth-service/story/story-auth-service'));
        this.allService.set('ibzmyterritory', () => import('@/app-core/auth-service/ibz-my-territory/ibz-my-territory-auth-service'));
        this.allService.set('productplan', () => import('@/app-core/auth-service/product-plan/product-plan-auth-service'));
        this.allService.set('projectstats', () => import('@/app-core/auth-service/project-stats/project-stats-auth-service'));
        this.allService.set('bug', () => import('@/app-core/auth-service/bug/bug-auth-service'));
        this.allService.set('productstats', () => import('@/app-core/auth-service/product-stats/product-stats-auth-service'));
    }


}
export const authServiceConstructor: AuthServiceConstructor = new AuthServiceConstructor();