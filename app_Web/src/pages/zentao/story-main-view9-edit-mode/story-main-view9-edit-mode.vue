<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import StoryMainView9_EditModeBase from './story-main-view9-edit-mode-base.vue';

import view_form from '@widgets/story/main-edit-mode-form/main-edit-mode-form.vue';
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
export default class StoryMainView9_EditMode extends StoryMainView9_EditModeBase {

}
</script>