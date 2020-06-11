<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import BuildMainGridViewBase from './build-main-grid-view-base.vue';

import view_grid from '@widgets/build/main-grid/main-grid.vue';
import view_searchform from '@widgets/build/default-searchform/default-searchform.vue';
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
export default class BuildMainGridView extends BuildMainGridViewBase {

}
</script>