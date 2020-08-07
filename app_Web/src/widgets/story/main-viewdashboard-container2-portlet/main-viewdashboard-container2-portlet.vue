
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import StoryMainViewdashboard_container2Base from './main-viewdashboard-container2-portlet-base.vue';

import view_dashboard_sysportlet1 from '@/widgets/story/storyspec-portlet/storyspec-portlet.vue';
import view_dashboard_sysportlet4 from '@/widgets/action/action-history-portlet/action-history-portlet.vue';
import view_dashboard_container4 from '@/widgets/story/main-viewdashboard-container4-portlet/main-viewdashboard-container4-portlet.vue';
 
@Component({
    components: {
        view_dashboard_sysportlet1, 
view_dashboard_sysportlet4, 
view_dashboard_container4, 
 
    }
})
export default class StoryMainViewdashboard_container2 extends StoryMainViewdashboard_container2Base {

}
</script>