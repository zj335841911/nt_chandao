
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import Db_container3Base from './db-container3-portlet-base.vue';

import view_db_productstatusportlet from '@/widgets/product/product-status-chart-portlet/product-status-chart-portlet.vue';
import view_db_assignedtomestoryportlet from '@/widgets/story/assigned-to-me-story-portlet/assigned-to-me-story-portlet.vue';
 
@Component({
    components: {
        view_db_productstatusportlet, 
view_db_assignedtomestoryportlet, 
 
    }
})
export default class Db_container3 extends Db_container3Base {

}
</script>