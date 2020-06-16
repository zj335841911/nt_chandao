<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import CaseStepMainGridView9_EditModeBase from './case-step-main-grid-view9-edit-mode-base.vue';

import view_grid from '@widgets/case-step/main-grid/main-grid.vue';
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
export default class CaseStepMainGridView9_EditMode extends CaseStepMainGridView9_EditModeBase {

}
</script>