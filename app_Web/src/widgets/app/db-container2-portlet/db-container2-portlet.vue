
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import Db_container2Base from './db-container2-portlet-base.vue';

import view_db_projectexpportlet from '@/widgets/project/project-exp-view-portlet/project-exp-view-portlet.vue';
import view_db_projectunclosedportlet from '@/widgets/project/un-closed-project-portlet/un-closed-project-portlet.vue';
 
@Component({
    components: {
        view_db_projectexpportlet, 
view_db_projectunclosedportlet, 
 
    }
})
export default class Db_container2 extends Db_container2Base {

}
</script>