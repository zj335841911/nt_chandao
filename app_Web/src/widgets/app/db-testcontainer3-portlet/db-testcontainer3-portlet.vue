
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import Db_testcontainer3Base from './db-testcontainer3-portlet-base.vue';

import view_db_assigntomebugportlet1 from '@/widgets/bug/assigned-to-me-bug-portlet/assigned-to-me-bug-portlet.vue';
import view_db_assigntomecaseportlet1 from '@/widgets/case/assigned-to-me-case-portlet/assigned-to-me-case-portlet.vue';
 
@Component({
    components: {
        view_db_assigntomebugportlet1, 
view_db_assigntomecaseportlet1, 
 
    }
})
export default class Db_testcontainer3 extends Db_testcontainer3Base {

}
</script>