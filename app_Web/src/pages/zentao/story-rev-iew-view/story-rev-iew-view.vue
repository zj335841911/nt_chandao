<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import StoryRevIewViewBase from './story-rev-iew-view-base.vue';

import view_form from '@widgets/story/review-form/review-form.vue';
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
export default class StoryRevIewView extends StoryRevIewViewBase {

}
</script>