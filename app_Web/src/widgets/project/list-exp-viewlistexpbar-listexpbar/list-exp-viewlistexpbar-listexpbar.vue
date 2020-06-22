<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import ListExpViewlistexpbarBase from './list-exp-viewlistexpbar-listexpbar-base.vue';
import view_listexpbar_list from '@widgets/project/exp-list/exp-list.vue';
 

/**
 * listexpbar部件
 *
 * @export
 * @class ListExpViewlistexpbar
 * @extends {ListExpViewlistexpbarBase}
 */
@Component({
    components: {
        view_listexpbar_list, 
         
    }
})
export default class ListExpViewlistexpbar extends ListExpViewlistexpbarBase { }
</script>