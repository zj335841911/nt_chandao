
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import Db_container3Base from './db-container3-portlet-base.vue';

import view_db_sysportlet2 from '@/widgets/project/project-status-bar-portlet/project-status-bar-portlet.vue';
import view_db_sysportlet3 from '@/widgets/task/assign-to-me-portlet/assign-to-me-portlet.vue';
 
@Component({
    components: {
        view_db_sysportlet2, 
view_db_sysportlet3, 
 
    }
})
export default class Db_container3 extends Db_container3Base {

}
</script>