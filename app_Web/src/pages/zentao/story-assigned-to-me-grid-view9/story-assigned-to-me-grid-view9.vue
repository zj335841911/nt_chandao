<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import StoryAssignedToMeGridView9Base from './story-assigned-to-me-grid-view9-base.vue';

import view_grid from '@widgets/story/main9-grid/main9-grid.vue';
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
export default class StoryAssignedToMeGridView9 extends StoryAssignedToMeGridView9Base {

}
</script>