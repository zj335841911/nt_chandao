<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import CaseGridView9Base from './case-grid-view9-base.vue';

import view_grid from '@widgets/case/main2-grid/main2-grid.vue';
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
export default class CaseGridView9 extends CaseGridView9Base {

}
</script>