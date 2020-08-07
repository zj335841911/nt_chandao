<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import CaseLinkCaseGridViewBase from './case-link-case-grid-view-base.vue';

import view_grid from '@widgets/case/main-link-test-grid/main-link-test-grid.vue';
import view_searchform from '@widgets/case/default-searchform/default-searchform.vue';
@Component({
    components: {
        view_grid, 
        view_searchform, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$store.commit('addCurPageViewtag', { fullPath: to.fullPath, viewtag: vm.viewtag });
        });
    },
})
export default class CaseLinkCaseGridView extends CaseLinkCaseGridViewBase {

}
</script>