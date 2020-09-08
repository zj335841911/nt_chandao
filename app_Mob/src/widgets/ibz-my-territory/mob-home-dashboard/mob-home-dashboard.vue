<script lang='ts'>
import { Component } from 'vue-property-decorator';
import MobHomeBase from './mob-home-dashboard-base.vue';
import view_dashboard_sysportlet4 from '@widgets/task/my-favorite-task-portlet/my-favorite-task-portlet.vue';
import view_dashboard_sysportlet5 from '@widgets/story/my-favorite-story-portlet/my-favorite-story-portlet.vue';
import view_dashboard_sysportlet2 from '@widgets/task/mytasks-portlet/mytasks-portlet.vue';
import view_dashboard_sysportlet3 from '@widgets/ibz-my-territory/my-bug-mob-portlet/my-bug-mob-portlet.vue';
import view_dashboard_sysportlet1 from '@widgets/story/mystorys-portlet/mystorys-portlet.vue';

 
@Component({
    components: {
        view_dashboard_sysportlet4, 
        view_dashboard_sysportlet5, 
        view_dashboard_sysportlet2, 
        view_dashboard_sysportlet3, 
        view_dashboard_sysportlet1, 
         
    }
})
export default class MobHome extends MobHomeBase {

}
</script>