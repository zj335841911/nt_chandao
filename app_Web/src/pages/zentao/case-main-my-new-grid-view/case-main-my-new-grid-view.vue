<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import CaseMainMyNewGridViewBase from './case-main-my-new-grid-view-base.vue';

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
export default class CaseMainMyNewGridView extends CaseMainMyNewGridViewBase {

}
</script>