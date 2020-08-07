<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import CaseGridView9_StoryRelatedBase from './case-grid-view9-story-related-base.vue';

import view_grid from '@widgets/case/story-related-grid/story-related-grid.vue';
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
export default class CaseGridView9_StoryRelated extends CaseGridView9_StoryRelatedBase {

}
</script>