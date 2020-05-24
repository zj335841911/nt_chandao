
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import StoryMainView_EditModedashboard_container1Base from './main-view-edit-modedashboard-container1-portlet-base.vue';

import view_dashboard_container2 from '@/widgets/story/main-view-edit-modedashboard-container2-portlet/main-view-edit-modedashboard-container2-portlet.vue';
import view_dashboard_container3 from '@/widgets/story/main-view-edit-modedashboard-container3-portlet/main-view-edit-modedashboard-container3-portlet.vue';
 
@Component({
    components: {
        view_dashboard_container2, 
view_dashboard_container3, 
 
    }
})
export default class StoryMainView_EditModedashboard_container1 extends StoryMainView_EditModedashboard_container1Base {

}
</script>