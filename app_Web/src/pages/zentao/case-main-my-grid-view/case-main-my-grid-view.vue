<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import CaseMainMyGridViewBase from './case-main-my-grid-view-base.vue';

import view_grid from '@widgets/case/main-grid-grid/main-grid-grid.vue';
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
export default class CaseMainMyGridView extends CaseMainMyGridViewBase {

}
</script>