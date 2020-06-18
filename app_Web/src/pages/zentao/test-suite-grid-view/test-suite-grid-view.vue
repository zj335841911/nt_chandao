<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import TestSuiteGridViewBase from './test-suite-grid-view-base.vue';

import view_grid from '@widgets/test-suite/main-grid/main-grid.vue';
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
export default class TestSuiteGridView extends TestSuiteGridViewBase {

}
</script>