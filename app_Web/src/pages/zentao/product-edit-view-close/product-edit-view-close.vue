<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import ProductEditView_CloseBase from './product-edit-view-close-base.vue';

import view_form from '@widgets/product/close-form/close-form.vue';
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
export default class ProductEditView_Close extends ProductEditView_CloseBase {

}
</script>