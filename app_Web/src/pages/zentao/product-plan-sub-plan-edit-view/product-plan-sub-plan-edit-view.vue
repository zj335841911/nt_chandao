<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import ProductPlanSubPlanEditViewBase from './product-plan-sub-plan-edit-view-base.vue';

import view_form from '@widgets/sub-product-plan/main-sub-plan-form/main-sub-plan-form.vue';
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
export default class ProductPlanSubPlanEditView extends ProductPlanSubPlanEditViewBase {

}
</script>