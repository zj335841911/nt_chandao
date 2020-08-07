
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import Db_container2Base from './db-container2-portlet-base.vue';

import view_db_productexpportlet from '@/widgets/product/product-exp-view-portlet/product-exp-view-portlet.vue';
import view_db_productunclosedportlet from '@/widgets/product/un-closed-product-portlet/un-closed-product-portlet.vue';
 
@Component({
    components: {
        view_db_productexpportlet, 
view_db_productunclosedportlet, 
 
    }
})
export default class Db_container2 extends Db_container2Base {

}
</script>