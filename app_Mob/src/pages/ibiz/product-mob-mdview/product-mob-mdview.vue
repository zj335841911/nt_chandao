<script lang='ts'>
import { Component } from 'vue-property-decorator';
import ProductMobMDViewBase from './product-mob-mdview-base.vue';

import view_mdctrl from '@widgets/product/mob-mobmdctrl/mob-mobmdctrl.vue';
@Component({
    components: {
        view_mdctrl, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$store.commit('addCurPageViewtag', { fullPath: to.fullPath, viewtag: vm.viewtag });
        });
    },
})
export default class ProductMobMDView extends ProductMobMDViewBase {

}
</script>