<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import StoryActiviteViewBase from './story-activite-view-base.vue';

import view_form from '@widgets/story/activation-form/activation-form.vue';
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
export default class StoryActiviteView extends StoryActiviteViewBase {

}
</script>