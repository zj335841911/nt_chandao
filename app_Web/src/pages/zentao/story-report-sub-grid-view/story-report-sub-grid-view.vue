<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import StoryReportSubGridViewBase from './story-report-sub-grid-view-base.vue';

import view_grid from '@widgets/story/main-report-sub-grid/main-report-sub-grid.vue';
@Component({
    components: {
        view_grid, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$store.commit('addCurPageViewtag', { route: to, viewtag: vm.viewtag });
        });
    },
})
export default class StoryReportSubGridView extends StoryReportSubGridViewBase {

}
</script>