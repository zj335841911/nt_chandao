
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import Db_rightcontainer3Base from './db-rightcontainer3-portlet-base.vue';

import view_db_projectstatusportlet from '@/widgets/project/project-status-bar-portlet/project-status-bar-portlet.vue';
import view_db_assignedtometaskportlet from '@/widgets/task/assign-to-me-portlet/assign-to-me-portlet.vue';
 
@Component({
    components: {
        view_db_projectstatusportlet, 
view_db_assignedtometaskportlet, 
 
    }
})
export default class Db_rightcontainer3 extends Db_rightcontainer3Base {

}
</script>