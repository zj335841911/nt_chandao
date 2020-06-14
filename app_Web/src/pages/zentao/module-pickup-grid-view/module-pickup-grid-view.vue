<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import ModulePickupGridViewBase from './module-pickup-grid-view-base.vue';

import view_grid from '@widgets/module/main-grid/main-grid.vue';
import view_searchform from '@widgets/module/default-searchform/default-searchform.vue';
@Component({
    components: {
        view_grid, 
        view_searchform, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$store.commit('addCurPageViewtag', { route: to, viewtag: vm.viewtag });
        });
    },
})
export default class ModulePickupGridView extends ModulePickupGridViewBase {

}
</script>