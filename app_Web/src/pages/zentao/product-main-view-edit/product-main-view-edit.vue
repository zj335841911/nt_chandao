<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import ProductMainView_EditBase from './product-main-view-edit-base.vue';

import view_form from '@widgets/product/main-edit-form/main-edit-form.vue';
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
export default class ProductMainView_Edit extends ProductMainView_EditBase {

}
</script>