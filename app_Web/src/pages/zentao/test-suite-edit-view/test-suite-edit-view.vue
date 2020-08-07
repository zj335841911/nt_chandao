<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import TestSuiteEditViewBase from './test-suite-edit-view-base.vue';

import view_form from '@widgets/test-suite/main-form/main-form.vue';
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
export default class TestSuiteEditView extends TestSuiteEditViewBase {

}
</script>