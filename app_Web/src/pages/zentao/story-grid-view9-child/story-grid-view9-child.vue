<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import StoryGridView9_ChildBase from './story-grid-view9-child-base.vue';

import view_grid from '@widgets/story/story-related-grid/story-related-grid.vue';
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
export default class StoryGridView9_Child extends StoryGridView9_ChildBase {

}
</script>