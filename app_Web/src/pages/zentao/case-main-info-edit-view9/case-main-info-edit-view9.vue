<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import CaseMainInfoEditView9Base from './case-main-info-edit-view9-base.vue';

import view_form from '@widgets/case/main-info-form/main-info-form.vue';
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
export default class CaseMainInfoEditView9 extends CaseMainInfoEditView9Base {

}
</script>