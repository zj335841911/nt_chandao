<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import CaseOptionViewBase from './case-option-view-base.vue';

import view_form from '@widgets/case/main-carry-form/main-carry-form.vue';
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
export default class CaseOptionView extends CaseOptionViewBase {

}
</script>