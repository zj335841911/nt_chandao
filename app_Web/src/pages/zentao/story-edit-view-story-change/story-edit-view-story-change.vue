<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import StoryEditView_StoryChangeBase from './story-edit-view-story-change-base.vue';

import view_form from '@widgets/story/story-spec-edit-mode-form/story-spec-edit-mode-form.vue';
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
export default class StoryEditView_StoryChange extends StoryEditView_StoryChangeBase {

}
</script>