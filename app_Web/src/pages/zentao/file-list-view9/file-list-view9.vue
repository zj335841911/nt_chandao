<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import FileListView9Base from './file-list-view9-base.vue';

import view_list from '@widgets/file/list-list/list-list.vue';
@Component({
    components: {
        view_list, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$store.commit('addCurPageViewtag', { fullPath: to.fullPath, viewtag: vm.viewtag });
        });
    },
})
export default class FileListView9 extends FileListView9Base {

}
</script>