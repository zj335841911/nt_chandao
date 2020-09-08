<script lang='ts'>
import { Component } from 'vue-property-decorator';
import MyFavoriteStoryBase from './my-favorite-story-portlet-base.vue';
import view_dashboard_sysportlet5_list from '@widgets/story/favorite-mob-list/favorite-mob-list.vue';

 
@Component({
    components: {
        view_dashboard_sysportlet5_list, 
         
    }
})
export default class MyFavoriteStory extends MyFavoriteStoryBase {

}
</script>