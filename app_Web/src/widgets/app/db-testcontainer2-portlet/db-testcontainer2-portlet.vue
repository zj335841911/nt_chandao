
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import Db_testcontainer2Base from './db-testcontainer2-portlet-base.vue';

import view_db_sysportlet2 from '@/widgets/product/text-exp-view-portlet/text-exp-view-portlet.vue';
import view_db_sysportlet1 from '@/widgets/test-task/to-test-test-task-portlet/to-test-test-task-portlet.vue';
 
@Component({
    components: {
        view_db_sysportlet2, 
view_db_sysportlet1, 
 
    }
})
export default class Db_testcontainer2 extends Db_testcontainer2Base {

}
</script>