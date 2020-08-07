<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import TabExpViewtabexppanelBase from './tab-exp-viewtabexppanel-tabexppanel-base.vue';
import view_tabviewpanel from '@widgets/story/tab-exp-viewtabviewpanel-tabviewpanel/tab-exp-viewtabviewpanel-tabviewpanel.vue';
import view_tabviewpanel2 from '@widgets/story/tab-exp-viewtabviewpanel2-tabviewpanel/tab-exp-viewtabviewpanel2-tabviewpanel.vue';
import view_tabviewpanel3 from '@widgets/story/tab-exp-viewtabviewpanel3-tabviewpanel/tab-exp-viewtabviewpanel3-tabviewpanel.vue';

 
@Component({
    components: {
        view_tabviewpanel, 
        view_tabviewpanel2, 
        view_tabviewpanel3, 
         
    }
})
export default class TabExpViewtabexppanel extends TabExpViewtabexppanelBase {

}
</script>