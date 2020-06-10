<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import CaseMainDetailEditView9Base from './case-main-detail-edit-view9-base.vue';

import view_form from '@widgets/case/main-detail-form/main-detail-form.vue';
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
export default class CaseMainDetailEditView9 extends CaseMainDetailEditView9Base {

}
</script>