<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import BurnChartViewBase from './burn-chart-view-base.vue';

import view_chart from '@widgets/burn/burn-down2-chart/burn-down2-chart.vue';
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
export default class BurnChartView extends BurnChartViewBase {

}
</script>