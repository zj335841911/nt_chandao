<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import ProjectBurnDownChartViewBase from './project-burn-down-chart-view-base.vue';

import view_chart from '@widgets/project/burn-down-chart/burn-down-chart.vue';
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
export default class ProjectBurnDownChartView extends ProjectBurnDownChartViewBase {

}
</script>