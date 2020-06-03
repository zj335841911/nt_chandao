
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import CompanyMainViewdashboard_companycontainer1Base from './main-viewdashboard-companycontainer1-portlet-base.vue';

import view_dashboard_companyInfo from '@/widgets/company/company-info-portlet/company-info-portlet.vue';
 
@Component({
    components: {
        view_dashboard_companyInfo, 
 
    }
})
export default class CompanyMainViewdashboard_companycontainer1 extends CompanyMainViewdashboard_companycontainer1Base {

}
</script>