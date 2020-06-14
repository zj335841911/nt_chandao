<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import StoryMainGridView_ByModuleBase from './story-main-grid-view-by-module-base.vue';

import view_grid from '@widgets/story/main-grid/main-grid.vue';
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
export default class StoryMainGridView_ByModule extends StoryMainGridView_ByModuleBase {

}
</script>