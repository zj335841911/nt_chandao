<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import ProductStatsTestEditView9Base from './product-stats-test-edit-view9-base.vue';

import view_form from '@widgets/product-stats/test-main2-form/test-main2-form.vue';
@Component({
    components: {
        view_form, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$store.commit('addCurPageViewtag', { fullPath: to.fullPath, viewtag: vm.viewtag });
        });
    },
})
export default class ProductStatsTestEditView9 extends ProductStatsTestEditView9Base {

}
</script>