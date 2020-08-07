<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import TaskGridView9_StoryRelatedBase from './task-grid-view9-story-related-base.vue';

import view_grid from '@widgets/task/story-related-grid/story-related-grid.vue';
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
export default class TaskGridView9_StoryRelated extends TaskGridView9_StoryRelatedBase {

}
</script>