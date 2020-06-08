<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import CaseFeatureGridViewBase from './case-feature-grid-view-base.vue';

import view_grid from '@widgets/case/feature-grid-grid/feature-grid-grid.vue';
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
export default class CaseFeatureGridView extends CaseFeatureGridViewBase {

}
</script>