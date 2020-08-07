<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import StoryPickupGridView3Base from './story-pickup-grid-view3-base.vue';

import view_grid from '@widgets/story/pickup-grid-grid/pickup-grid-grid.vue';
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
export default class StoryPickupGridView3 extends StoryPickupGridView3Base {

}
</script>