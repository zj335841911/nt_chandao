<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import CompanyMainView9Base from './company-main-view9-base.vue';

import view_form from '@widgets/company/main-form/main-form.vue';
@Component({
    components: {
        view_form, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$store.commit('addCurPageViewtag', { route: to, viewtag: vm.viewtag });
        });
    },
})
export default class CompanyMainView9 extends CompanyMainView9Base {

}
</script>