<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import MainBase from './main-dashboard-base.vue';
import view_dashboard_companyInfo from '@widgets/company/company-info-portlet/company-info-portlet.vue';
import view_dashboard_companycontainer1 from '@widgets/company/main-viewdashboard-companycontainer1-portlet/main-viewdashboard-companycontainer1-portlet.vue';

 
@Component({
    components: {
        view_dashboard_companyInfo, 
        view_dashboard_companycontainer1, 
         
    }
})
export default class Main extends MainBase {

}
</script>