<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import StorytoStoryEditViewBase from './storyto-story-edit-view-base.vue';

import view_form from '@widgets/story/bug-to-story-form/bug-to-story-form.vue';
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
export default class StorytoStoryEditView extends StorytoStoryEditViewBase {

}
</script>