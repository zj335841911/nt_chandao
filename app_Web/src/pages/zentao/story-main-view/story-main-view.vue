<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import StoryMainViewBase from './story-main-view-base.vue';

import view_dashboard from '@widgets/story/main-panel-dashboard/main-panel-dashboard.vue';
@Component({
    components: {
        view_dashboard, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$store.commit('addCurPageViewtag', { route: to, viewtag: vm.viewtag });
        });
    },
})
export default class StoryMainView extends StoryMainViewBase {

}
</script>