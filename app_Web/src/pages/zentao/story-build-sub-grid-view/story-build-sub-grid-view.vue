<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import StoryBuildSubGridViewBase from './story-build-sub-grid-view-base.vue';

import view_grid from '@widgets/story/main-build-sub-grid/main-build-sub-grid.vue';
@Component({
    components: {
        view_grid, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$store.commit('addCurPageViewtag', { route: to, viewtag: vm.viewtag });
        });
    },
})
export default class StoryBuildSubGridView extends StoryBuildSubGridViewBase {

}
</script>