<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import TodoGridView9Base from './todo-grid-view9-base.vue';

import view_grid from '@widgets/todo/my-upcoming-grid/my-upcoming-grid.vue';
@Component({
    components: {
        view_grid, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$store.commit('addCurPageViewtag', { fullPath: to.fullPath, viewtag: vm.viewtag });
        });
    },
})
export default class TodoGridView9 extends TodoGridView9Base {

}
</script>