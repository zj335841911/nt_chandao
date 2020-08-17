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
        this.allService.set('task', () => import('@/app-core/auth-service/task/task-auth-service'));
        this.allService.set('story', () => import('@/app-core/auth-service/story/story-auth-service'));
        this.allService.set('bug', () => import('@/app-core/auth-service/bug/bug-auth-service'));
    }


}
export const authServiceConstructor: AuthServiceConstructor = new AuthServiceConstructor();