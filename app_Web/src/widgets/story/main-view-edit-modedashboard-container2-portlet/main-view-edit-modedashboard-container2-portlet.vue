
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import StoryMainView_EditModedashboard_container2Base from './main-view-edit-modedashboard-container2-portlet-base.vue';

import view_dashboard_sysportlet1 from '@/widgets/story/storyspec-portlet/storyspec-portlet.vue';
import view_dashboard_sysportlet3 from '@/widgets/action/action-history-portlet/action-history-portlet.vue';
 
@Component({
    components: {
        view_dashboard_sysportlet1, 
view_dashboard_sysportlet3, 
 
    }
})
export default class StoryMainView_EditModedashboard_container2 extends StoryMainView_EditModedashboard_container2Base {

}
</script>