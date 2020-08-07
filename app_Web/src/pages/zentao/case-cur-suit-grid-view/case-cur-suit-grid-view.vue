<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import CaseCurSuitGridViewBase from './case-cur-suit-grid-view-base.vue';

import view_grid from '@widgets/case/main-grid-suit-sub-grid/main-grid-suit-sub-grid.vue';
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
export default class CaseCurSuitGridView extends CaseCurSuitGridViewBase {

}
</script>