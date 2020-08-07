<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import StoryProjectEditViewBase from './story-project-edit-view-base.vue';

import view_form from '@widgets/story/main-project-new-form/main-project-new-form.vue';
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
export default class StoryProjectEditView extends StoryProjectEditViewBase {

}
</script>