import TaskMYTASKS from '@/widgets/task/mytasks-portlet/mytasks-portlet.vue';
import StoryMYSTORYS from '@/widgets/story/mystorys-portlet/mystorys-portlet.vue';

export const  PortletComponent = {
    install(v: any, opt: any) {
        v.component('app-task-mytasks-portlet', TaskMYTASKS);
        v.component('app-story-mystorys-portlet', StoryMYSTORYS);
        v.component('task-mytasks-portlet', TaskMYTASKS);
        v.component('story-mystorys-portlet', StoryMYSTORYS);
    }
};