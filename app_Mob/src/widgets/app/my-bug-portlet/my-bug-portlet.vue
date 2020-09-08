<script lang='ts'>
import { Component } from 'vue-property-decorator';
import MyBugBase from './my-bug-portlet-base.vue';
import view_dashboard_sysportlet3_list from '@widgets/bug/ass-mobdashboard-list/ass-mobdashboard-list.vue';

 
@Component({
    components: {
        view_dashboard_sysportlet3_list, 
         
    }
})
export default class MyBug extends MyBugBase {

}
</script>