<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import StoryTabExpViewBase from './story-tab-exp-view-base.vue';

import view_tabexppanel from '@widgets/story/tab-exp-viewtabexppanel-tabexppanel/tab-exp-viewtabexppanel-tabexppanel.vue';
@Component({
    components: {
        view_tabexppanel, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$store.commit('addCurPageViewtag', { fullPath: to.fullPath, viewtag: vm.viewtag });
        });
    },
})
export default class StoryTabExpView extends StoryTabExpViewBase {

}
</script>