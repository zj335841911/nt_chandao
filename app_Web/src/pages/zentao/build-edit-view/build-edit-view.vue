<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import BuildEditViewBase from './build-edit-view-base.vue';

import view_form from '@widgets/build/quick-create-form/quick-create-form.vue';
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
export default class BuildEditView extends BuildEditViewBase {

}
</script>