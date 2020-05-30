<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import StoryMainView9Base from './story-main-view9-base.vue';

import view_form from '@widgets/story/main-form/main-form.vue';
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
export default class StoryMainView9 extends StoryMainView9Base {

}
</script>