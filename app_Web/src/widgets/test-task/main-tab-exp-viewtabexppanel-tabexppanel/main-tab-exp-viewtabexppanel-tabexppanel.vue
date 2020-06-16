<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import MainTabExpViewtabexppanelBase from './main-tab-exp-viewtabexppanel-tabexppanel-base.vue';
import view_tabviewpanel from '@widgets/test-task/main-tab-exp-viewtabviewpanel-tabviewpanel/main-tab-exp-viewtabviewpanel-tabviewpanel.vue';
import view_tabviewpanel2 from '@widgets/test-task/main-tab-exp-viewtabviewpanel2-tabviewpanel/main-tab-exp-viewtabviewpanel2-tabviewpanel.vue';

 
@Component({
    components: {
        view_tabviewpanel, 
        view_tabviewpanel2, 
         
    }
})
export default class MainTabExpViewtabexppanel extends MainTabExpViewtabexppanelBase {

}
</script>