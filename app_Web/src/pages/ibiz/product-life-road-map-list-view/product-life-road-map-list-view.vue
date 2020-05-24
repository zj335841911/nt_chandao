<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import ProductLifeRoadMapListViewBase from './product-life-road-map-list-view-base.vue';

import view_list from '@widgets/product-life/get-roadmap-list/get-roadmap-list.vue';
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
export default class ProductLifeRoadMapListView extends ProductLifeRoadMapListViewBase {

}
</script>