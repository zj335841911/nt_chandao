<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import CaseBatchNewGridViewBase from './case-batch-new-grid-view-base.vue';

import view_grid from '@widgets/case/batch-new-grid/batch-new-grid.vue';
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
export default class CaseBatchNewGridView extends CaseBatchNewGridViewBase {

}
</script>