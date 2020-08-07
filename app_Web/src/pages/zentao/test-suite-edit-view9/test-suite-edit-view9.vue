<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import TestSuiteEditView9Base from './test-suite-edit-view9-base.vue';

import view_form from '@widgets/test-suite/main-info-form/main-info-form.vue';
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
export default class TestSuiteEditView9 extends TestSuiteEditView9Base {

}
</script>