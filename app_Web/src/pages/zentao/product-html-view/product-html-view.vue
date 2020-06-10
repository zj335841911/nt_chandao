<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import ProductHtmlViewBase from './product-html-view-base.vue';

@Component({
    components: {
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$store.commit('addCurPageViewtag', { route: to, viewtag: vm.viewtag });
        });
    },
})
export default class ProductHtmlView extends ProductHtmlViewBase {

}
</script>