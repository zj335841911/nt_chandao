
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import Db_container2Base from './db-container2-portlet-base.vue';

import view_db_sysportlet4 from '@/widgets/project/project-status-bar-portlet/project-status-bar-portlet.vue';
import view_db_sysportlet1 from '@/widgets/project/un-closed-project-portlet/un-closed-project-portlet.vue';
 
@Component({
    components: {
        view_db_sysportlet4, 
view_db_sysportlet1, 
 
    }
})
export default class Db_container2 extends Db_container2Base {

}
</script>