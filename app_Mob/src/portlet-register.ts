import TaskMyFavoriteTask from '@/widgets/task/my-favorite-task-portlet/my-favorite-task-portlet.vue';
import TaskMyTaskMob from '@/widgets/task/my-task-mob-portlet/my-task-mob-portlet.vue';
import ProductProductStatusChartMobB from '@/widgets/product/product-status-chart-mob-b-portlet/product-status-chart-mob-b-portlet.vue';
import ActionAllTrendsMob from '@/widgets/action/all-trends-mob-portlet/all-trends-mob-portlet.vue';
import StoryMOBMyFavoriteStory from '@/widgets/story/mobmy-favorite-story-portlet/mobmy-favorite-story-portlet.vue';
import StoryMyStory from '@/widgets/story/my-story-portlet/my-story-portlet.vue';
import IbzMyTerritoryMyWork from '@/widgets/ibz-my-territory/my-work-portlet/my-work-portlet.vue';
import BugMyBugMob from '@/widgets/bug/my-bug-mob-portlet/my-bug-mob-portlet.vue';

export const  PortletComponent = {
    install(v: any, opt: any) {
        v.component('app-product-product-status-chart-mob-b-portlet', ProductProductStatusChartMobB);
        v.component('app-action-all-trends-mob-portlet', ActionAllTrendsMob);
        v.component('app-task-my-favorite-task-portlet', TaskMyFavoriteTask);
        v.component('app-story-mobmy-favorite-story-portlet', StoryMOBMyFavoriteStory);
        v.component('app-ibz-my-territory-my-work-portlet', IbzMyTerritoryMyWork);
        v.component('app-bug-my-bug-mob-portlet', BugMyBugMob);
        v.component('app-task-my-task-mob-portlet', TaskMyTaskMob);
        v.component('app-story-my-story-portlet', StoryMyStory);
        v.component('task-my-favorite-task-portlet', TaskMyFavoriteTask);
        v.component('task-my-task-mob-portlet', TaskMyTaskMob);
        v.component('product-product-status-chart-mob-b-portlet', ProductProductStatusChartMobB);
        v.component('action-all-trends-mob-portlet', ActionAllTrendsMob);
        v.component('story-mobmy-favorite-story-portlet', StoryMOBMyFavoriteStory);
        v.component('story-my-story-portlet', StoryMyStory);
        v.component('ibz-my-territory-my-work-portlet', IbzMyTerritoryMyWork);
        v.component('bug-my-bug-mob-portlet', BugMyBugMob);
    }
};