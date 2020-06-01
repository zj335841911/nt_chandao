<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import CaseGridViewBase from './case-grid-view-base.vue';

import view_grid from '@widgets/case/main-grid/main-grid.vue';
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
export default class CaseGridView extends CaseGridViewBase {

}
</script>