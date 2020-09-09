import MyFavoriteTask from '@/widgets/app/my-favorite-task-portlet/my-favorite-task-portlet.vue';
import MOBMyFavoriteStory from '@/widgets/app/mobmy-favorite-story-portlet/mobmy-favorite-story-portlet.vue';
import IbzMyTerritoryMyBugMob from '@/widgets/ibz-my-territory/my-bug-mob-portlet/my-bug-mob-portlet.vue';
import IbzMyTerritoryMyTaskMob from '@/widgets/ibz-my-territory/my-task-mob-portlet/my-task-mob-portlet.vue';
import IbzMyTerritoryMyStory from '@/widgets/ibz-my-territory/my-story-portlet/my-story-portlet.vue';

export const  PortletComponent = {
    install(v: any, opt: any) {
        v.component('app-my-favorite-task-portlet', MyFavoriteTask);
        v.component('app-mobmy-favorite-story-portlet', MOBMyFavoriteStory);
        v.component('app-ibz-my-territory-my-bug-mob-portlet', IbzMyTerritoryMyBugMob);
        v.component('app-ibz-my-territory-my-task-mob-portlet', IbzMyTerritoryMyTaskMob);
        v.component('app-ibz-my-territory-my-story-portlet', IbzMyTerritoryMyStory);
        v.component('ibz-my-territory-my-bug-mob-portlet', IbzMyTerritoryMyBugMob);
        v.component('ibz-my-territory-my-task-mob-portlet', IbzMyTerritoryMyTaskMob);
        v.component('ibz-my-territory-my-story-portlet', IbzMyTerritoryMyStory);
    }
};