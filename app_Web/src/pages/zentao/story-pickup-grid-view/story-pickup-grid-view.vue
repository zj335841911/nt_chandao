<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import StoryPickupGridViewBase from './story-pickup-grid-view-base.vue';

import view_grid from '@widgets/story/pickup-grid-grid/pickup-grid-grid.vue';
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
export default class StoryPickupGridView extends StoryPickupGridViewBase {

}
</script>