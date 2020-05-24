<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import TestTabExpViewtabexppanelBase from './test-tab-exp-viewtabexppanel-tabexppanel-base.vue';
import view_tabviewpanel from '@widgets/product/test-tab-exp-viewtabviewpanel-tabviewpanel/test-tab-exp-viewtabviewpanel-tabviewpanel.vue';
import view_tabviewpanel2 from '@widgets/product/test-tab-exp-viewtabviewpanel2-tabviewpanel/test-tab-exp-viewtabviewpanel2-tabviewpanel.vue';

 
@Component({
    components: {
        view_tabviewpanel, 
        view_tabviewpanel2, 
         
    }
})
export default class TestTabExpViewtabexppanel extends TestTabExpViewtabexppanelBase {

}
</script>