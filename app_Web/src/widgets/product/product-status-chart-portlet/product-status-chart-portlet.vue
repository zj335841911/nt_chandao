
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import ProductProductStatusChartBase from './product-status-chart-portlet-base.vue';
import view_db_productstatusportlet_chart from '@widgets/product/product-status-chart/product-status-chart.vue';

 
@Component({
    components: {
        view_db_productstatusportlet_chart, 
         
    }
})
export default class ProductProductStatusChart extends ProductProductStatusChartBase {

}
</script>
