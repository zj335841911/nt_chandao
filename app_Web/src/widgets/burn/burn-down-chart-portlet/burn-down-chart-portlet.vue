
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import BurnBurnDownChartBase from './burn-down-chart-portlet-base.vue';
import view_dashboard_sysportlet1_chart from '@widgets/burn/burn-down-chart/burn-down-chart.vue';

 
@Component({
    components: {
        view_dashboard_sysportlet1_chart, 
         
    }
})
export default class BurnBurnDownChart extends BurnBurnDownChartBase {

}
</script>
