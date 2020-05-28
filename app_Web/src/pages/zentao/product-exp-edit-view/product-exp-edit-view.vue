<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import ProductExpEditViewBase from './product-exp-edit-view-base.vue';

import view_form from '@widgets/product/dashboard-info-form/dashboard-info-form.vue';
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
export default class ProductExpEditView extends ProductExpEditViewBase {

}
</script>