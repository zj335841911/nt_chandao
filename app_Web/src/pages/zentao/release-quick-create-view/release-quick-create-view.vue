<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import ReleaseQuickCreateViewBase from './release-quick-create-view-base.vue';

import view_form from '@widgets/release/quick-create-form/quick-create-form.vue';
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
export default class ReleaseQuickCreateView extends ReleaseQuickCreateViewBase {

}
</script>