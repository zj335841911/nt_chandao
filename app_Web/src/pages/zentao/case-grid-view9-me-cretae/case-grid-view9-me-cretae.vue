<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import CaseGridView9_MeCretaeBase from './case-grid-view9-me-cretae-base.vue';

import view_grid from '@widgets/case/main2-grid/main2-grid.vue';
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
export default class CaseGridView9_MeCretae extends CaseGridView9_MeCretaeBase {

}
</script>