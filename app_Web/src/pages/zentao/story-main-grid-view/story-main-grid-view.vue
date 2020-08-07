<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import StoryMainGridViewBase from './story-main-grid-view-base.vue';

import view_grid from '@widgets/story/main-grid/main-grid.vue';
import view_searchbar from '@widgets/story/custom-searchbar/custom-searchbar.vue';
@Component({
    components: {
        view_grid, 
        view_searchbar, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$store.commit('addCurPageViewtag', { fullPath: to.fullPath, viewtag: vm.viewtag });
        });
    },
})
export default class StoryMainGridView extends StoryMainGridViewBase {

}
</script>