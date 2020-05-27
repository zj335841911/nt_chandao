<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import ProductChartViewBase from './product-chart-view-base.vue';

import view_chart from '@widgets/product/product-status-chart/product-status-chart.vue';
@Component({
    components: {
        view_chart, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$store.commit('addCurPageViewtag', { fullPath: to.fullPath, viewtag: vm.viewtag });
        });
    },
})
export default class ProductChartView extends ProductChartViewBase {

}
</script>