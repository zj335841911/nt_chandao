<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import StoryMainView_EditModeBase from './story-main-view-edit-mode-base.vue';

import view_dashboard from '@widgets/story/main-panel-edit-mode-dashboard/main-panel-edit-mode-dashboard.vue';
@Component({
    components: {
        view_dashboard, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$store.commit('addCurPageViewtag', { fullPath: to.fullPath, viewtag: vm.viewtag });
        });
    },
})
export default class StoryMainView_EditMode extends StoryMainView_EditModeBase {

}
</script>