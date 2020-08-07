<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import StoryReleaseSubGridViewBase from './story-release-sub-grid-view-base.vue';

import view_grid from '@widgets/story/main-release-sub-grid/main-release-sub-grid.vue';
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
export default class StoryReleaseSubGridView extends StoryReleaseSubGridViewBase {

}
</script>