<script lang='ts'>
import { Component } from 'vue-property-decorator';
import MyFavoriteTaskBase from './my-favorite-task-portlet-base.vue';
import view_dashboard_sysportlet4_list from '@widgets/task/favorite-mobdas-list/favorite-mobdas-list.vue';

 
@Component({
    components: {
        view_dashboard_sysportlet4_list, 
         
    }
})
export default class MyFavoriteTask extends MyFavoriteTaskBase {

}
</script>