
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import StoryMainViewdashboard_container1Base from './main-viewdashboard-container1-portlet-base.vue';

import view_dashboard_container2 from '@/widgets/story/main-viewdashboard-container2-portlet/main-viewdashboard-container2-portlet.vue';
import view_dashboard_container3 from '@/widgets/story/main-viewdashboard-container3-portlet/main-viewdashboard-container3-portlet.vue';
 
@Component({
    components: {
        view_dashboard_container2, 
view_dashboard_container3, 
 
    }
})
export default class StoryMainViewdashboard_container1 extends StoryMainViewdashboard_container1Base {

}
</script>