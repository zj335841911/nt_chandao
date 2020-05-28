<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import ProductPortalView_dbBase from './product-portal-view-db-dashboard-base.vue';
import view_db_container1 from '@widgets/app/db-container1-portlet/db-container1-portlet.vue';
import view_db_container3 from '@widgets/app/db-container3-portlet/db-container3-portlet.vue';
import view_db_container2 from '@widgets/app/db-container2-portlet/db-container2-portlet.vue';
import view_db_productexpportlet from '@widgets/product/product-exp-view-portlet/product-exp-view-portlet.vue';
import view_db_productunclosedportlet from '@widgets/product/un-closed-product-portlet/un-closed-product-portlet.vue';
import view_db_productstatusportlet from '@widgets/product/product-status-chart-portlet/product-status-chart-portlet.vue';
import view_db_assignedtomestoryportlet from '@widgets/story/assigned-to-me-story-portlet/assigned-to-me-story-portlet.vue';

 
@Component({
    components: {
        view_db_container1, 
        view_db_container3, 
        view_db_container2, 
        view_db_productexpportlet, 
        view_db_productunclosedportlet, 
        view_db_productstatusportlet, 
        view_db_assignedtomestoryportlet, 
         
    }
})
export default class ProductPortalView_db extends ProductPortalView_dbBase {

}
</script>