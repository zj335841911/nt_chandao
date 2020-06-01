<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import StoryMainView9_StorySpecBase from './story-main-view9-story-spec-base.vue';

import view_form from '@widgets/story/story-spec-form/story-spec-form.vue';
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
export default class StoryMainView9_StorySpec extends StoryMainView9_StorySpecBase {

}
</script>