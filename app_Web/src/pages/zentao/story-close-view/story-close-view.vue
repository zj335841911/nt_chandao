<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import StoryCloseViewBase from './story-close-view-base.vue';

import view_form from '@widgets/story/cosed-form/cosed-form.vue';
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
export default class StoryCloseView extends StoryCloseViewBase {

}
</script>