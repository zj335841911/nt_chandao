<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import ProductTestLeftSidebarListViewBase from './product-test-left-sidebar-list-view-base.vue';

import view_list from '@widgets/product/bug-sidebar-list/bug-sidebar-list.vue';
@Component({
    components: {
        view_list, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$store.commit('addCurPageViewtag', { fullPath: to.fullPath, viewtag: vm.viewtag });
        });
    },
})
export default class ProductTestLeftSidebarListView extends ProductTestLeftSidebarListViewBase {

}
</script>