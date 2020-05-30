
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import Db_testcontainer1Base from './db-testcontainer1-portlet-base.vue';

import view_db_testcontainer2 from '@/widgets/app/db-testcontainer2-portlet/db-testcontainer2-portlet.vue';
import view_db_testcontainer3 from '@/widgets/app/db-testcontainer3-portlet/db-testcontainer3-portlet.vue';
 
@Component({
    components: {
        view_db_testcontainer2, 
view_db_testcontainer3, 
 
    }
})
export default class Db_testcontainer1 extends Db_testcontainer1Base {

}
</script>