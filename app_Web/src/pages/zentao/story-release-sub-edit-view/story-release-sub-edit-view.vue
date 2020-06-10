<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import StoryReleaseSubEditViewBase from './story-release-sub-edit-view-base.vue';

import view_form from '@widgets/story/main-new-mode-form/main-new-mode-form.vue';
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
export default class StoryReleaseSubEditView extends StoryReleaseSubEditViewBase {

}
</script>