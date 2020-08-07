<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import StoryGridView9_RelatedBase from './story-grid-view9-related-base.vue';

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
export default class StoryGridView9_Related extends StoryGridView9_RelatedBase {

}
</script>