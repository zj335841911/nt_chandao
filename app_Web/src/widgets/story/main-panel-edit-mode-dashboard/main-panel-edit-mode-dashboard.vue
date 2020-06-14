<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import MainPanel_EditModeBase from './main-panel-edit-mode-dashboard-base.vue';
import view_dashboard_sysportlet2 from '@widgets/story/base-info-edit-mode-portlet/base-info-edit-mode-portlet.vue';
import view_dashboard_sysportlet3 from '@widgets/action/action-history-portlet/action-history-portlet.vue';
import view_dashboard_sysportlet1 from '@widgets/story/storyspec-portlet/storyspec-portlet.vue';

 
@Component({
    components: {
        view_dashboard_sysportlet2, 
        view_dashboard_sysportlet3, 
        view_dashboard_sysportlet1, 
         
    }
})
export default class MainPanel_EditMode extends MainPanel_EditModeBase {

}
</script> 