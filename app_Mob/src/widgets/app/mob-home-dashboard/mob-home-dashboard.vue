<script lang='ts'>
import { Component } from 'vue-property-decorator';
import MobHomeBase from './mob-home-dashboard-base.vue';
import view_dashboard_sysportlet2 from '@widgets/task/mytasks-portlet/mytasks-portlet.vue';
import view_dashboard_sysportlet1 from '@widgets/story/mystorys-portlet/mystorys-portlet.vue';

 
@Component({
    components: {
        view_dashboard_sysportlet2, 
        view_dashboard_sysportlet1, 
         
    }
})
export default class MobHome extends MobHomeBase {

}
</script>