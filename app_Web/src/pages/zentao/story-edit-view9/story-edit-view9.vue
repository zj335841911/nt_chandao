<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import StoryEditView9Base from './story-edit-view9-base.vue';

import view_form from '@widgets/story/task-story-spec-form/task-story-spec-form.vue';
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
export default class StoryEditView9 extends StoryEditView9Base {

}
</script>