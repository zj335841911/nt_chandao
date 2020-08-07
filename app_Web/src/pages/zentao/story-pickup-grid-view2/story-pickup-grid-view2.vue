<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import StoryPickupGridView2Base from './story-pickup-grid-view2-base.vue';

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
export default class StoryPickupGridView2 extends StoryPickupGridView2Base {

}
</script>