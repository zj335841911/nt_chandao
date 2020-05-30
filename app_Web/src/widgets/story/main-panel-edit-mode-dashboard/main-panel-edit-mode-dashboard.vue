<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import MainPanel_EditModeBase from './main-panel-edit-mode-dashboard-base.vue';
import view_dashboard_container3 from '@widgets/story/main-view-edit-modedashboard-container3-portlet/main-view-edit-modedashboard-container3-portlet.vue';
import view_dashboard_container2 from '@widgets/story/main-view-edit-modedashboard-container2-portlet/main-view-edit-modedashboard-container2-portlet.vue';
import view_dashboard_container1 from '@widgets/story/main-view-edit-modedashboard-container1-portlet/main-view-edit-modedashboard-container1-portlet.vue';
import view_dashboard_sysportlet2 from '@widgets/story/base-info-edit-mode-portlet/base-info-edit-mode-portlet.vue';
import view_dashboard_sysportlet3 from '@widgets/action/action-history-portlet/action-history-portlet.vue';
import view_dashboard_sysportlet1 from '@widgets/story/storyspec-portlet/storyspec-portlet.vue';

 
@Component({
    components: {
        view_dashboard_container3, 
        view_dashboard_container2, 
        view_dashboard_container1, 
        view_dashboard_sysportlet2, 
        view_dashboard_sysportlet3, 
        view_dashboard_sysportlet1, 
         
    }
})
export default class MainPanel_EditMode extends MainPanel_EditModeBase {

}
</script>