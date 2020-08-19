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
        this.allService.set('user', () => import('@/app-core/service/user/user-service'));
        this.allService.set('projectteam', () => import('@/app-core/service/project-team/project-team-service'));
        this.allService.set('task', () => import('@/app-core/service/task/task-service'));
        this.allService.set('product', () => import('@/app-core/service/product/product-service'));
        this.allService.set('taskteam', () => import('@/app-core/service/task-team/task-team-service'));
        this.allService.set('project', () => import('@/app-core/service/project/project-service'));
        this.allService.set('todo', () => import('@/app-core/service/todo/todo-service'));
        this.allService.set('story', () => import('@/app-core/service/story/story-service'));
        this.allService.set('ibzmyterritory', () => import('@/app-core/service/ibz-my-territory/ibz-my-territory-service'));
        this.allService.set('productplan', () => import('@/app-core/service/product-plan/product-plan-service'));
        this.allService.set('projectstats', () => import('@/app-core/service/project-stats/project-stats-service'));
        this.allService.set('bug', () => import('@/app-core/service/bug/bug-service'));
        this.allService.set('productstats', () => import('@/app-core/service/product-stats/product-stats-service'));
    }

}

/**
 * 应用实体服务构造器
 */
export const appEntityServiceConstructor: AppEntityServiceConstructor = new AppEntityServiceConstructor();