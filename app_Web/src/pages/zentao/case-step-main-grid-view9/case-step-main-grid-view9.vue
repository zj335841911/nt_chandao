<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import CaseStepMainGridView9Base from './case-step-main-grid-view9-base.vue';

import view_grid from '@widgets/case-step/main-grid/main-grid.vue';
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
export default class CaseStepMainGridView9 extends CaseStepMainGridView9Base {

}
</script>