
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import Db_totalcontainer1Base from './db-totalcontainer1-portlet-base.vue';

import view_db_leftcontainer2 from '@/widgets/app/db-leftcontainer2-portlet/db-leftcontainer2-portlet.vue';
import view_db_rightcontainer3 from '@/widgets/app/db-rightcontainer3-portlet/db-rightcontainer3-portlet.vue';
 
@Component({
    components: {
        view_db_leftcontainer2, 
view_db_rightcontainer3, 
 
    }
})
export default class Db_totalcontainer1 extends Db_totalcontainer1Base {

}
</script>