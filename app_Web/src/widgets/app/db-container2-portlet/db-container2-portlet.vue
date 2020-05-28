
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import Db_container2Base from './db-container2-portlet-base.vue';

import view_db_sysportlet3 from '@/widgets/product/product-exp-view-portlet/product-exp-view-portlet.vue';
import view_db_sysportlet1 from '@/widgets/product/un-closed-product-portlet/un-closed-product-portlet.vue';
 
@Component({
    components: {
        view_db_sysportlet3, 
view_db_sysportlet1, 
 
    }
})
export default class Db_container2 extends Db_container2Base {

}
</script>