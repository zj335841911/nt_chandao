<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import TestPortalView_dbBase from './test-portal-view-db-dashboard-base.vue';
import view_db_testcontainer2 from '@widgets/app/db-testcontainer2-portlet/db-testcontainer2-portlet.vue';
import view_db_assigntomebugportlet1 from '@widgets/bug/assigned-to-me-bug-portlet/assigned-to-me-bug-portlet.vue';
import view_db_testcontainer3 from '@widgets/app/db-testcontainer3-portlet/db-testcontainer3-portlet.vue';
import view_db_sysportlet2 from '@widgets/product/text-exp-view-portlet/text-exp-view-portlet.vue';
import view_db_sysportlet1 from '@widgets/test-task/to-test-test-task-portlet/to-test-test-task-portlet.vue';
import view_db_testcontainer1 from '@widgets/app/db-testcontainer1-portlet/db-testcontainer1-portlet.vue';
import view_db_assigntomecaseportlet1 from '@widgets/case/assigned-to-me-case-portlet/assigned-to-me-case-portlet.vue';

 
@Component({
    components: {
        view_db_testcontainer2, 
        view_db_assigntomebugportlet1, 
        view_db_testcontainer3, 
        view_db_sysportlet2, 
        view_db_sysportlet1, 
        view_db_testcontainer1, 
        view_db_assigntomecaseportlet1, 
         
    }
})
export default class TestPortalView_db extends TestPortalView_dbBase {

}
</script>