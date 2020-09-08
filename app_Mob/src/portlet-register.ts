import MOBMyFavoriteStory from '@/widgets/app/mobmy-favorite-story-portlet/mobmy-favorite-story-portlet.vue';
import TaskMyFavoriteTask from '@/widgets/task/my-favorite-task-portlet/my-favorite-task-portlet.vue';
import StoryMyFavoriteStory from '@/widgets/story/my-favorite-story-portlet/my-favorite-story-portlet.vue';
import StoryMYSTORYS from '@/widgets/story/mystorys-portlet/mystorys-portlet.vue';
import IbzMyTerritoryMyBugMob from '@/widgets/ibz-my-territory/my-bug-mob-portlet/my-bug-mob-portlet.vue';
import IbzMyTerritoryMyTaskMob from '@/widgets/ibz-my-territory/my-task-mob-portlet/my-task-mob-portlet.vue';

export const  PortletComponent = {
    install(v: any, opt: any) {
        v.component('app-task-my-favorite-task-portlet', TaskMyFavoriteTask);
        v.component('app-mobmy-favorite-story-portlet', MOBMyFavoriteStory);
        v.component('app-ibz-my-territory-my-bug-mob-portlet', IbzMyTerritoryMyBugMob);
        v.component('app-ibz-my-territory-my-task-mob-portlet', IbzMyTerritoryMyTaskMob);
        v.component('app-story-mystorys-portlet', StoryMYSTORYS);
        v.component('app-story-my-favorite-story-portlet', StoryMyFavoriteStory);
        v.component('task-my-favorite-task-portlet', TaskMyFavoriteTask);
        v.component('story-my-favorite-story-portlet', StoryMyFavoriteStory);
        v.component('story-mystorys-portlet', StoryMYSTORYS);
        v.component('ibz-my-territory-my-bug-mob-portlet', IbzMyTerritoryMyBugMob);
        v.component('ibz-my-territory-my-task-mob-portlet', IbzMyTerritoryMyTaskMob);
    }
};