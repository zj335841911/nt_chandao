<script lang='ts'>
import { Component } from 'vue-property-decorator';
import ReportMobTabExpViewtabexppanelBase from './report-mob-tab-exp-viewtabexppanel-tabexppanel-base.vue';
import view_tabviewpanel from '@widgets/ibz-my-territory/report-mob-tab-exp-viewtabviewpanel-tabviewpanel/report-mob-tab-exp-viewtabviewpanel-tabviewpanel.vue';
import view_tabviewpanel2 from '@widgets/ibz-my-territory/report-mob-tab-exp-viewtabviewpanel2-tabviewpanel/report-mob-tab-exp-viewtabviewpanel2-tabviewpanel.vue';

 
@Component({
    components: {
        view_tabviewpanel, 
        view_tabviewpanel2, 
         
    }
})
export default class ReportMobTabExpViewtabexppanel extends ReportMobTabExpViewtabexppanelBase {

}
</script>