<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import CaseTestMainDetailEditView9Base from './case-test-main-detail-edit-view9-base.vue';

import view_form from '@widgets/case/main-detail-form/main-detail-form.vue';
@Component({
    components: {
        view_form, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$store.commit('addCurPageViewtag', { fullPath: to.fullPath, viewtag: vm.viewtag });
        });
    },
})
export default class CaseTestMainDetailEditView9 extends CaseTestMainDetailEditView9Base {

}
</script>