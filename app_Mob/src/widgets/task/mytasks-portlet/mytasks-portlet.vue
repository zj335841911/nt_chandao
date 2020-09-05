<script lang='ts'>
import { Component } from 'vue-property-decorator';
import MYTASKSBase from './mytasks-portlet-base.vue';
import view_dashboard_sysportlet2_list from '@widgets/task/ass-mob-list/ass-mob-list.vue';

 
@Component({
    components: {
        view_dashboard_sysportlet2_list, 
         
    }
})
export default class MYTASKS extends MYTASKSBase {

}
</script>