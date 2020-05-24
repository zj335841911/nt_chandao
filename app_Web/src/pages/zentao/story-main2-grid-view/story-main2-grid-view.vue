<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import StoryMain2GridViewBase from './story-main2-grid-view-base.vue';

import view_grid from '@widgets/story/main2-grid/main2-grid.vue';
import view_searchform from '@widgets/story/default-searchform/default-searchform.vue';
@Component({
    components: {
        view_grid, 
        view_searchform, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$store.commit('addCurPageViewtag', { fullPath: to.fullPath, viewtag: vm.viewtag });
        });
    },
})
export default class StoryMain2GridView extends StoryMain2GridViewBase {

}
</script>