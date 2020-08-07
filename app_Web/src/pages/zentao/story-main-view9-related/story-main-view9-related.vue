<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import StoryMainView9_RelatedBase from './story-main-view9-related-base.vue';

import view_form from '@widgets/story/related-form/related-form.vue';
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
export default class StoryMainView9_Related extends StoryMainView9_RelatedBase {

}
</script>