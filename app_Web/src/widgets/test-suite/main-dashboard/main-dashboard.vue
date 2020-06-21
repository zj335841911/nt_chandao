<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import MainBase from './main-dashboard-base.vue';
import view_dashboard_sysportlet2 from '@widgets/test-suite/main-info-view-portlet/main-info-view-portlet.vue';
import view_dashboard_sysportlet3 from '@widgets/action/action-history-portlet/action-history-portlet.vue';
import view_dashboard_sysportlet1 from '@widgets/test-suite/cur-suit-case-grid-view-portlet/cur-suit-case-grid-view-portlet.vue';

 
@Component({
    components: {
        view_dashboard_sysportlet2, 
        view_dashboard_sysportlet3, 
        view_dashboard_sysportlet1, 
         
    }
})
export default class Main extends MainBase {

}
</script> 