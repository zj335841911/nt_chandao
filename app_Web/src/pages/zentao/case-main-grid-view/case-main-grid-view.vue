<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import CaseMainGridViewBase from './case-main-grid-view-base.vue';

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
export default class CaseMainGridView extends CaseMainGridViewBase {

}
</script>