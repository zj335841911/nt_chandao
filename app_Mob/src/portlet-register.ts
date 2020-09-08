import IbzMyTerritoryMystory from '@/widgets/ibz-my-territory/mystory-portlet/mystory-portlet.vue';
import TaskMyFavoriteTask from '@/widgets/task/my-favorite-task-portlet/my-favorite-task-portlet.vue';
import TaskMYTASKS from '@/widgets/task/mytasks-portlet/mytasks-portlet.vue';
import StoryMyFavoriteStory from '@/widgets/story/my-favorite-story-portlet/my-favorite-story-portlet.vue';
import StoryMYSTORYS from '@/widgets/story/mystorys-portlet/mystorys-portlet.vue';
import IbzMyTerritoryMyBugMob from '@/widgets/ibz-my-territory/my-bug-mob-portlet/my-bug-mob-portlet.vue';
import BugMyBug from '@/widgets/bug/my-bug-portlet/my-bug-portlet.vue';

export const  PortletComponent = {
    install(v: any, opt: any) {
        v.component('app-task-my-favorite-task-portlet', TaskMyFavoriteTask);
        v.component('app-story-my-favorite-story-portlet', StoryMyFavoriteStory);
        v.component('app-ibz-my-territory-my-bug-mob-portlet', IbzMyTerritoryMyBugMob);
        v.component('app-task-mytasks-portlet', TaskMYTASKS);
        v.component('app-story-mystorys-portlet', StoryMYSTORYS);
        v.component('app-ibz-my-territory-mystory-portlet', IbzMyTerritoryMystory);
        v.component('app-bug-my-bug-portlet', BugMyBug);
        v.component('task-my-favorite-task-portlet', TaskMyFavoriteTask);
        v.component('task-mytasks-portlet', TaskMYTASKS);
        v.component('story-my-favorite-story-portlet', StoryMyFavoriteStory);
        v.component('story-mystorys-portlet', StoryMYSTORYS);
        v.component('ibz-my-territory-my-bug-mob-portlet', IbzMyTerritoryMyBugMob);
        v.component('bug-my-bug-portlet', BugMyBug);
    }
};