<script lang='ts'>
import { Component } from 'vue-property-decorator';
import MYTASKSBase from './mytasks-portlet-base.vue';
import view_dashboard_sysportlet2_list from '@widgets/task/ass-mob-dashboard-list/ass-mob-dashboard-list.vue';

 
@Component({
    components: {
        view_dashboard_sysportlet2_list, 
         
    }
})
export default class MYTASKS extends MYTASKSBase {

}
</script>