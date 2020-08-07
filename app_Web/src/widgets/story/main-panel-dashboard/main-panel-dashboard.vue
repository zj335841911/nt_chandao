<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import MainPanelBase from './main-panel-dashboard-base.vue';
import view_dashboard_container4 from '@widgets/story/main-viewdashboard-container4-portlet/main-viewdashboard-container4-portlet.vue';
import view_dashboard_container3 from '@widgets/story/main-viewdashboard-container3-portlet/main-viewdashboard-container3-portlet.vue';
import view_dashboard_container2 from '@widgets/story/main-viewdashboard-container2-portlet/main-viewdashboard-container2-portlet.vue';
import view_dashboard_container1 from '@widgets/story/main-viewdashboard-container1-portlet/main-viewdashboard-container1-portlet.vue';
import view_dashboard_sysportlet4 from '@widgets/action/action-history-portlet/action-history-portlet.vue';
import view_dashboard_sysportlet5 from '@widgets/story/story-related-portlet/story-related-portlet.vue';
import view_dashboard_sysportlet2 from '@widgets/story/base-info-portlet/base-info-portlet.vue';
import view_dashboard_sysportlet3 from '@widgets/story/main-toolbar-portlet/main-toolbar-portlet.vue';
import view_dashboard_sysportlet1 from '@widgets/story/storyspec-portlet/storyspec-portlet.vue';

 
@Component({
    components: {
        view_dashboard_container4, 
        view_dashboard_container3, 
        view_dashboard_container2, 
        view_dashboard_container1, 
        view_dashboard_sysportlet4, 
        view_dashboard_sysportlet5, 
        view_dashboard_sysportlet2, 
        view_dashboard_sysportlet3, 
        view_dashboard_sysportlet1, 
         
    }
})
export default class MainPanel extends MainPanelBase {

}
</script>