
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import Db_container3Base from './db-container3-portlet-base.vue';

import view_db_sysportlet2 from '@/widgets/product/product-status-portlet/product-status-portlet.vue';
import view_db_sysportlet4 from '@/widgets/story/assigned-to-me-story-portlet/assigned-to-me-story-portlet.vue';
 
@Component({
    components: {
        view_db_sysportlet2, 
view_db_sysportlet4, 
 
    }
})
export default class Db_container3 extends Db_container3Base {

}
</script>