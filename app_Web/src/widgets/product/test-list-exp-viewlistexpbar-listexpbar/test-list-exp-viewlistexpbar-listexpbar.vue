<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import TestListExpViewlistexpbarBase from './test-list-exp-viewlistexpbar-listexpbar-base.vue';
import view_listexpbar_list from '@widgets/product/test-exp-list/test-exp-list.vue';

 
@Component({
    components: {
        view_listexpbar_list, 
         
    }
})
export default class TestListExpViewlistexpbar extends TestListExpViewlistexpbarBase {

}
</script>