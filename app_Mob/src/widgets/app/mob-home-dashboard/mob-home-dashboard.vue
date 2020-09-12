<script lang='ts'>
import { Component } from 'vue-property-decorator';
import MobHomeBase from './mob-home-dashboard-base.vue';
import view_dashboard_sysportlet6 from '@widgets/ibz-my-territory/my-work-portlet/my-work-portlet.vue';
import view_dashboard_sysportlet7 from '@widgets/action/all-trends-mob-portlet/all-trends-mob-portlet.vue';
import view_dashboard_sysportlet4 from '@widgets/ibz-my-territory/my-favorite-task-portlet/my-favorite-task-portlet.vue';
import view_dashboard_sysportlet5 from '@widgets/ibz-my-territory/my-story-portlet/my-story-portlet.vue';
import view_dashboard_sysportlet2 from '@widgets/ibz-my-territory/my-task-mob-portlet/my-task-mob-portlet.vue';
import view_dashboard_sysportlet3 from '@widgets/ibz-my-territory/my-bug-mob-portlet/my-bug-mob-portlet.vue';
import view_dashboard_sysportlet1 from '@widgets/ibz-my-territory/mobmy-favorite-story-portlet/mobmy-favorite-story-portlet.vue';

 
@Component({
    components: {
        view_dashboard_sysportlet6, 
        view_dashboard_sysportlet7, 
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