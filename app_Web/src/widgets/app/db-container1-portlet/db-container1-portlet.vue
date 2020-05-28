
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import Db_container1Base from './db-container1-portlet-base.vue';

import view_db_container2 from '@/widgets/app/db-container2-portlet/db-container2-portlet.vue';
import view_db_container3 from '@/widgets/app/db-container3-portlet/db-container3-portlet.vue';
 
@Component({
    components: {
        view_db_container2, 
view_db_container3, 
 
    }
})
export default class Db_container1 extends Db_container1Base {

}
</script>