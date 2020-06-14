<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import MainBase from './main-dashboard-base.vue';
import view_dashboard_companyInfo from '@widgets/company/company-info-portlet/company-info-portlet.vue';

 
@Component({
    components: {
        view_dashboard_companyInfo, 
         
    }
})
export default class Main extends MainBase {

}
</script> 