<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import CaseStepCarryOutEditModeBase from './case-step-carry-out-edit-mode-base.vue';

import view_grid from '@widgets/ibzcase-step/main-row-edit-carry-out-grid/main-row-edit-carry-out-grid.vue';
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
export default class CaseStepCarryOutEditMode extends CaseStepCarryOutEditModeBase {

}
</script>