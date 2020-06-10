<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import StoryGridView9_AssignedToMeBase from './story-grid-view9-assigned-to-me-base.vue';

import view_grid from '@widgets/story/main9-grid/main9-grid.vue';
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
export default class StoryGridView9_AssignedToMe extends StoryGridView9_AssignedToMeBase {

}
</script>