<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import CaseMainEditViewBase from './case-main-edit-view-base.vue';

import view_form from '@widgets/case/main-edit-form/main-edit-form.vue';
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
export default class CaseMainEditView extends CaseMainEditViewBase {

}
</script>