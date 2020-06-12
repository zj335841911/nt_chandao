<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import ProductTestListExpViewBase from './product-test-list-exp-view-base.vue';

import view_listexpbar from '@widgets/product/test-list-exp-viewlistexpbar-listexpbar/test-list-exp-viewlistexpbar-listexpbar.vue';
@Component({
    components: {
        view_listexpbar, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$store.commit('addCurPageViewtag', { route: to, viewtag: vm.viewtag });
        });
    },
})
export default class ProductTestListExpView extends ProductTestListExpViewBase {

}
</script>