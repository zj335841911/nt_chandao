<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import StorySpecMainView9Base from './story-spec-main-view9-base.vue';

import view_searchform from '@widgets/story-spec/default-searchform/default-searchform.vue';
import view_form from '@widgets/story-spec/main-form/main-form.vue';
@Component({
    components: {
        view_searchform, 
        view_form, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$store.commit('addCurPageViewtag', { fullPath: to.fullPath, viewtag: vm.viewtag });
        });
    },
})
export default class StorySpecMainView9 extends StorySpecMainView9Base {

}
</script>