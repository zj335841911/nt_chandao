<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import BugGridView9_StoryRelatedBase from './bug-grid-view9-story-related-base.vue';

import view_grid from '@widgets/bug/story-related-grid/story-related-grid.vue';
@Component({
    components: {
        view_grid, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$store.commit('addCurPageViewtag', { fullPath: to.fullPath, viewtag: vm.viewtag });
        });
    },
})
export default class BugGridView9_StoryRelated extends BugGridView9_StoryRelatedBase {

}
</script>