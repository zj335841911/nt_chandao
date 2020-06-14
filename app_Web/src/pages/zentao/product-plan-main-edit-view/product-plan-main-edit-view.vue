<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import ProductPlanMainEditViewBase from './product-plan-main-edit-view-base.vue';

import view_form from '@widgets/product-plan/info-form/info-form.vue';
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
export default class ProductPlanMainEditView extends ProductPlanMainEditViewBase {

}
</script>