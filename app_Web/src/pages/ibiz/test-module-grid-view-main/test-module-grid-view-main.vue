<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import TestModuleGridViewMainBase from './test-module-grid-view-main-base.vue';

import view_grid from '@widgets/test-module/main-row-grid/main-row-grid.vue';
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
export default class TestModuleGridViewMain extends TestModuleGridViewMainBase {

}
</script>