<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import TestModuleQuickCfgViewBase from './test-module-quick-cfg-view-base.vue';

import view_form from '@widgets/test-module/main-form/main-form.vue';
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
export default class TestModuleQuickCfgView extends TestModuleQuickCfgViewBase {

}
</script>