<script lang='ts'>
import { Component } from 'vue-property-decorator';
import MYSTORYSBase from './mystorys-portlet-base.vue';
import view_portlet_MyStoryMob_list from '@widgets/story/ass-mobdashboard-list/ass-mobdashboard-list.vue';

 
@Component({
    components: {
        view_portlet_MyStoryMob_list, 
         
    }
})
export default class MYSTORYS extends MYSTORYSBase {

}
</script>