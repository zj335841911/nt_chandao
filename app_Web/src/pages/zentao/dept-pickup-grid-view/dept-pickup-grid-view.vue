<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import DeptPickupGridViewBase from './dept-pickup-grid-view-base.vue';

import view_grid from '@widgets/dept/main-grid/main-grid.vue';
import view_searchform from '@widgets/dept/default-searchform/default-searchform.vue';
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
export default class DeptPickupGridView extends DeptPickupGridViewBase {

}
</script>