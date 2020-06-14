<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import ProductStatsEditView9Base from './product-stats-edit-view9-base.vue';

import view_form from '@widgets/product-stats/main2-form/main2-form.vue';
@Component({
    components: {
        view_form, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$store.commit('addCurPageViewtag', { route: to, viewtag: vm.viewtag });
        });
    },
})
export default class ProductStatsEditView9 extends ProductStatsEditView9Base {

}
</script>