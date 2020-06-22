<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import MainTabExpViewtabexppanelBase from './main-tab-exp-viewtabexppanel-tabexppanel-base.vue';
import view_tabviewpanel from '@widgets/build/main-tab-exp-viewtabviewpanel-tabviewpanel/main-tab-exp-viewtabviewpanel-tabviewpanel.vue';
import view_tabviewpanel2 from '@widgets/build/main-tab-exp-viewtabviewpanel2-tabviewpanel/main-tab-exp-viewtabviewpanel2-tabviewpanel.vue';
import view_tabviewpanel3 from '@widgets/build/main-tab-exp-viewtabviewpanel3-tabviewpanel/main-tab-exp-viewtabviewpanel3-tabviewpanel.vue';
import view_tabviewpanel4 from '@widgets/build/main-tab-exp-viewtabviewpanel4-tabviewpanel/main-tab-exp-viewtabviewpanel4-tabviewpanel.vue';
 

/**
 * tabexppanel部件
 *
 * @export
 * @class MainTabExpViewtabexppanel
 * @extends {MainTabExpViewtabexppanelBase}
 */
@Component({
    components: {
        view_tabviewpanel, 
        view_tabviewpanel2, 
        view_tabviewpanel3, 
        view_tabviewpanel4, 
         
    }
})
export default class MainTabExpViewtabexppanel extends MainTabExpViewtabexppanelBase { }
</script>