<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import ProductPlanEditView_NewModeBase from './product-plan-edit-view-new-mode-base.vue';

import view_form from '@widgets/product-plan/main-new-mode-form/main-new-mode-form.vue';
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
export default class ProductPlanEditView_NewMode extends ProductPlanEditView_NewModeBase {

}
</script>