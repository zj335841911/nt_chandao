<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import StoryGridView9_SubStoryBase from './story-grid-view9-sub-story-base.vue';

import view_grid from '@widgets/story/main3-grid/main3-grid.vue';
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
export default class StoryGridView9_SubStory extends StoryGridView9_SubStoryBase {

}
</script>